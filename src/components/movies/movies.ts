import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MovieS } from '../../services/movie-s';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './movies.html',
  styleUrl: './movies.css'
})
export class Movies implements OnInit {
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
    })
    try {
      this.listOfMovies = JSON.parse(localStorage.getItem('movies-cache') || '[]');
    }
    catch { this.listOfMovies = []; }
  }
  search() {
    const trimmedsearch = this.movieSeearch.trim()
    if (trimmedsearch) {
      this.movieServ.searchMovies(trimmedsearch).subscribe({
        next: (data) => {
          this.listOfMovies = data
        },
        error: (err) => console.log("search error")

      })

    }
    else {
      console.log("empty");
       this.ftechMovies();
    }
  }

}
