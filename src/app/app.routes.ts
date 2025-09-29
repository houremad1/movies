import { Routes } from '@angular/router';
import { Search } from '../pages/search/search';
import { Home } from '../pages/home/home';
import { MovieDetails } from '../components/movie-details/movie-details';
import { Watchlist } from '../pages/watchlist/watchlist';
import { NoItems } from '../pages/no-items/no-items';

export const routes: Routes = [
  { path: '', component:Home},
  { path: 'search', component:Search},
  { path: 'movie-details/:id', component: MovieDetails}, 
  { path: 'watchlist', component:Watchlist},
  { path: 'no-items', component:NoItems }

];
