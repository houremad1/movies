import { HttpClient } from '@angular/common/http';
import { Injectable, Query } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieS {
  constructor(private http:HttpClient){}
  getallmovies():Observable<any>{
    return this.http.get<any>("http://localhost:3006/")
  }

  searchMovies(query:string):Observable<any>{
    return this.http.get<any>(`http://localhost:3006/movies?query=${query}`)
  }


}
