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
getStrokeColor(rate: number): string {
  if (rate >= 70) {
    return '#21d07a'; // green
  } else {
    return '#d2d531'; // yellow
  }
}

}
