import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Game } from './game.dto';
import { TwitchResponse } from './twitchResponse.dto';

@Injectable({
  providedIn: 'root'
})
export class GamesServiceService {

  constructor(private http: HttpClient) { }

  getTopGames():Observable<Game[]>
  
  {
    return this.http.get<TwitchResponse>('/games/top').pipe(
      map(response=>response.data)
    );

  }
}
