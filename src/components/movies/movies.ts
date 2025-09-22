import { Component } from '@angular/core';
import { MovieCard } from '../movie-card/movie-card';

@Component({
  selector: 'app-movies',
  imports: [MovieCard],
  templateUrl: './movies.html',
  styleUrl: './movies.css'
})
export class Movies {

}
