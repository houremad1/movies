import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieS } from '../../services/movie-s';
import { MovieCard } from '../movie-card/movie-card';
import { CommonModule } from '@angular/common';
import { Navbar } from '../../components/navbar/navbar';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [CommonModule, MovieCard, Navbar],
  templateUrl: './movie-details.html',
  styleUrls: ['./movie-details.css']
})
export class MovieDetails implements OnInit, OnDestroy {
  movie: any | null = null;
  recommendations: any[] = [];
  loading = true;
  private routeSub: Subscription | null = null;

  constructor(
    public route: ActivatedRoute,
    public movieServ: MovieS,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.routeSub = this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      console.log('Requested ID:', id);

      if (id) {
        // استرجاع بيانات الفيلم من localStorage لو موجودة
        const cachedMovie = localStorage.getItem(`movie-${id}`);
        if (cachedMovie) {
          this.movie = JSON.parse(cachedMovie);
          this.loading = false;
          console.log('Movie loaded from cache');
        } else {
          this.loading = true;
          this.movieServ.getMovieById(id).subscribe({
            next: (data) => {
              if (data && Object.keys(data).length > 0) {
                this.movie = data;
                localStorage.setItem(`movie-${id}`, JSON.stringify(data));
              } else {
                this.movie = null;
              }
              this.loading = false;
            },
            error: (err) => {
              console.error('Error fetching movie details:', err);
              this.loading = false;
              this.movie = null;
            }
          });
        }

        // استرجاع التوصيات من localStorage أو جلبها من الـ API
        const cachedRecommendations = localStorage.getItem('recommendations');
        if (cachedRecommendations) {
          this.recommendations = JSON.parse(cachedRecommendations);
        }
        this.movieServ.getallmovies().subscribe(allMovies => {
          const filtered = allMovies.filter((m: any) => m._id !== id).slice(0, 5);
          this.recommendations = filtered;
          localStorage.setItem('recommendations', JSON.stringify(filtered));
        });

      } else {
        this.loading = false;
        this.movie = null;
        this.recommendations = [];
        console.log('No movie ID found in route');
      }
    });
  }

  trackByFn(index: number, item: any): any {
    return item._id;
  }

  ngOnDestroy(): void {
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }
}
