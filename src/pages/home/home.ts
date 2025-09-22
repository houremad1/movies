import { Component } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { Movies } from '../../components/movies/movies';
import { Hero } from '../../components/hero/hero';

@Component({
  selector: 'app-home',
  imports: [Navbar, Movies, Hero],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
