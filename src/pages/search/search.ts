import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Navbar } from '../../components/navbar/navbar';
import { MovieS } from '../../services/movie-s';
import { MovieCard } from '../../components/movie-card/movie-card';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, Navbar, MovieCard],
  templateUrl: './search.html',
  styleUrls: ['./search.css']
})
export class Search implements OnInit {
  listOfMovies: any[] = [];
  movieSeearch: string = '';

  constructor(private movieServ: MovieS) { }

  ngOnInit(): void {
    this.ftechMovies();
  }

  ftechMovies() {
    this.movieServ.getallmovies().subscribe({
      next: (data) => {
        console.log(data);
        this.listOfMovies = data;
        localStorage.setItem('movies-cache', JSON.stringify(data));
      }
    });

    try {
      this.listOfMovies = JSON.parse(localStorage.getItem('movies-cache') || '[]');
    }
    catch { this.listOfMovies = []; }
  }

  search() {
    const trimmedsearch = this.movieSeearch.trim();
    if (trimmedsearch) {
      this.movieServ.searchMovies(trimmedsearch).subscribe({
        next: (data) => {
          this.listOfMovies = data;
        },
        error: (err) => console.log("search error")
      });
    }
    else {
      console.log("empty");
      this.ftechMovies();
    }
  }
}
