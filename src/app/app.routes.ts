import { Routes } from '@angular/router';
import { Search } from '../pages/search/search';
import { Home } from '../pages/home/home';
import { MovieDetails } from '../components/movie-details/movie-details';

export const routes: Routes = [
    { path: 'search', component:Search},
    { path: '', component:Home},
    { path: 'movie-details/:id', component: MovieDetails}, 
    //  { path: '', component:Movie},

];
