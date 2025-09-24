import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  imports: [RouterModule ],
  templateUrl: './movie-card.html',
  styleUrl: './movie-card.css'
})
export class MovieCard {
  @Input() movie: any;
  getRating(movie: any): number {
  return Math.round(movie.vote_average * 10);
}

}
