import { NgClass } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { watchListS } from '../../services/watchList-s';

@Component({
  selector: 'app-fav-movie-card',
  imports: [NgClass],
  templateUrl: './fav-movie-card.html',
  styleUrl: './fav-movie-card.css'
})
export class FavMovieCard implements OnInit {
 constructor(private watchlistService:watchListS){}
  @Input() movie: any;

  toggleLove(movie: any) {
    movie.loved = !movie.loved;}
  watchlist:any[]=[];
  ngOnInit(): void {
      this.loadWatchlist();
  }
  loadWatchlist():void{
    this.watchlistService.getWatchlist().subscribe({
      next:(data)=>{
        this.watchlist=data;
      }
    })
  }
  removeMovie(MovieId:string):void{
        this.watchlistService.removeFromWatchlist(MovieId).subscribe({
      next:()=>{
       this.loadWatchlist
      }
    })
  }
  addMovie(MovieId:string):void{
      this.watchlistService.addToWatchlist(MovieId).subscribe({
      next:()=>{
       this.loadWatchlist
      }
    })
  }
}
