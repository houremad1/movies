import { Component } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { FavMovieCard } from '../../components/fav-movie-card/fav-movie-card';

@Component({
  selector: 'app-watchlist',
  imports: [Navbar, FavMovieCard],
  templateUrl: './watchlist.html',
  styleUrl: './watchlist.css'
})
export class Watchlist {

}
