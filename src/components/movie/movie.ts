import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MovieS } from '../../services/movie-s';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie',
   standalone: true,  
  imports: [FormsModule,CommonModule],
  templateUrl: './movie.html',
  styleUrl: './movie.css'
})
export class Movie implements OnInit {
 listOfMovies:any []=[];
 constructor(private movieServ:MovieS){}
 ngOnInit(): void {
  this.reload();
 }
 reload(){
     
    this.movieServ.getallmovies().subscribe({
      next:(data)=>{
        console.log(data);
        this.listOfMovies=data;
        localStorage.setItem('movies-cache', JSON.stringify(data));
      }
     })
      try {
    this.listOfMovies = JSON.parse(localStorage.getItem('movies-cache') || '[]');
  } catch { this.listOfMovies = []; }
 
 }
}
