import {map, Observable, take} from "rxjs";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Game} from "../../dto/game";
import {TwitchResponseDto} from "../../../api/data-access/twitch-response.dto";
import {GameDto} from "../../dto/game.dto";
import {GameDataDto} from '../../dto/game-data.dto';

@Injectable({
  providedIn: 'root'
})
export class GamesServiceService {

  constructor(private http: HttpClient) {
  }

  getTopGames(): Observable<Game[]> {
    return this.http.get<TwitchResponseDto<GameDto>>('/games/top?first=25').pipe(
      map(response => response.data),
      map(gameDtos => gameDtos.filter(gameDto => gameDto.igdb_id !== '')),
      map(gameDtos => gameDtos.slice(0, 16)),
      map(gameDtos => gameDtos.map(gameDto => ({
        title: gameDto.name,
        image: gameDto.box_art_url,
        tags: gameDto.tags || [],
        subTitle: gameDto.subTitle,
        slug: gameDto.id,
      })))
    )
  }

  getCategoriesAfter$(limit: number, after?: string): Observable<GameDataDto> {
    return this.http.get<GameDataDto>(`/games/top?first=${limit}${after ? `&after=${after}` : ''}`);
  }

  getGamesById$(id: number): Observable<GameDto> {
    return this.http.get<TwitchResponseDto<GameDto>>(`/games?id=${id}`).pipe(
      map(response => response.data[0])
    )
  }
}

