import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, tap, forkJoin, of, switchMap } from 'rxjs';
import { GamesServiceService } from 'src/app/shared/data-access/games/games.service';
import { StreamService } from 'src/app/shared/data-access/streams/stream.service';
import { GameDto } from 'src/app/shared/dto/game.dto';
import { StreamDto } from 'src/app/shared/dto/stream.dto';

@Component({
  selector: 'app-load-streams-by-game-id',
  templateUrl: './load-streams-by-game-id.component.html',
  styleUrls: ['./load-streams-by-game-id.component.scss']
})
export class LoadStreamsByGameIdComponent {

  limit = 20;
  after?: string;

  game$?: Observable<GameDto>;
  streams$?: Observable<StreamDto[]>;
  streamsInFrench$?: Observable<StreamDto[]>;
  gameId = "0";

  constructor(private route: ActivatedRoute, private streamService: StreamService, private gameService: GamesServiceService) {
    this.route.params.subscribe(params => this.gameId = params["gameId"])
  }

  ngOnInit(): void {
    this.streams$ = this.route.params.pipe(
      switchMap(params => this.streamService.getStreamsByGameIdAfter$(
        params["gameId"],
        this.limit,
        this.after
      ).pipe(
        tap(response => {
          this.after = response.pagination.cursor;
        }),
        map(response => response.data)
      )
      ));
    this.streamsInFrench$ = this.route.params.pipe(
      switchMap(params => this.streamService.getStreamByGameIdByLanguage$(params["gameId"], "fr")
      ));
    this.game$ = this.route.params.pipe(
      switchMap(params => this.gameService.getGamesById$(params["gameId"])
      ));
  }

  onScroll(): void {
    if (this.streams$) {
      this.streams$.pipe(
        switchMap(streams => {
          return this.route.params.pipe(
            switchMap(params => this.streamService.getStreamsByGameIdAfter$(
              params["gameId"],
              this.limit,
              this.after
            ).pipe(
              tap(response => {
                this.after = response.pagination.cursor;
              }),
              map(response => response.data)
            )
            ),
            map(newStreams => [...streams, ...newStreams])
          );
        })
      ).subscribe(streams => {
        this.streams$ = of(streams);
      });
    }
  }
}
