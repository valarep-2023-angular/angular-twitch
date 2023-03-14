import {map, Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Game} from "../../dto/game";
import {TwitchResponseDto} from "../../dto/twitch-response.dto";

@Injectable({
  providedIn: 'root'
})
export class GamesServiceService {

  constructor(private http: HttpClient) {
  }

  getTopGames(): Observable<Game[]> {
    return this.http.get<TwitchResponseDto>('/games/top').pipe(
      map(response => response.data),
      map(gameDtos => gameDtos.map(gameDto => ({
            title: gameDto.name,
            image: gameDto.box_art_url,
            tags: gameDto.tags || [],
            subTitle: gameDto.subTitle,
            slug: gameDto.id,
          })
        )
      )
    )
  }
}

