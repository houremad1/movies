import { Routes } from '@angular/router';
import { Search } from '../pages/search/search';
import { Home } from '../pages/home/home';

export const routes: Routes = [
    { path: 'search', component:Search},
    { path: '', component:Home},

];
