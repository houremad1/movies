import { Component } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { Movies } from "../../components/movies/movies";

@Component({
  selector: 'app-search',
  imports: [Navbar, Movies],
  templateUrl: './search.html',
  styleUrl: './search.css'
})
export class Search {

}
