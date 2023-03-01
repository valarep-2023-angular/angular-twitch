import {map, Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {GameDto} from "../../dto/game.dto";
import {TwitchResponseDto} from "../../dto/twitch-response.dto";

@Injectable({
  providedIn: 'root'
})
export class GamesServiceService {

  constructor(private http: HttpClient) {
  }

  getTopGames(): Observable<GameDto[]> {
    return this.http.get<TwitchResponseDto>('/games/top').pipe(
      map(response => response.data)
    );
  }
}
