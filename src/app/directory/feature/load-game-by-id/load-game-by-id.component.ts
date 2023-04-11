import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesServiceService } from 'src/app/shared/data-access/games/games.service';
import { StreamService } from 'src/app/shared/data-access/streams/stream.service';
import { map, Observable, tap, forkJoin, of, switchMap } from 'rxjs';
import { GameDto } from 'src/app/shared/dto/game.dto';
import { StreamDto } from 'src/app/shared/dto/stream.dto';

@Component({
  selector: 'app-load-game-by-id',
  templateUrl: './load-game-by-id.component.html',
  styleUrls: ['./load-game-by-id.component.scss']
})
export class LoadGameByIdComponent implements OnInit{
  gameId ="0";

  game$?: Observable<GameDto>;

  constructor(private route: ActivatedRoute, private streamService: StreamService, private gameService: GamesServiceService) {
    this.route.params.subscribe(params => this.gameId = params["gameId"])
  }

  ngOnInit(): void {

    this.game$= this.route.params.pipe(
      switchMap(params => this.gameService.getGamesById$(params["gameId"])
      ));
      
  }

}
