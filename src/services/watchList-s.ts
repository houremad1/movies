import { HttpClient } from '@angular/common/http';
import { Injectable, Query } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class watchListS{
    constructor(private http:HttpClient){}
     getWatchlist():Observable<any>{
        return this.http.get<any>("http://localhost:3006/watchlist");
     }
      addToWatchlist(movieId:string):Observable<any>{
        return this.http.post<any>('http://localhost:3006/watchlist',{movieId})
    }
     removeFromWatchlist(movieId:string):Observable<any>{
        return this.http.delete<any>(`http://localhost:3006/watchlist/${movieId}`)
     }
}

