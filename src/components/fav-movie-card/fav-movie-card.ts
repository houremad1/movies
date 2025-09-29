import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fav-movie-card',
  imports: [NgClass],
  templateUrl: './fav-movie-card.html',
  styleUrl: './fav-movie-card.css'
})
export class FavMovieCard {
  @Input() movie: any;

  toggleLove(movie: any) {
    movie.loved = !movie.loved;}
}
