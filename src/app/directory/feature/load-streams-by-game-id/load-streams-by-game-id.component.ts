import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { StreamService } from 'src/app/shared/data-access/streams/stream.service';
import { StreamDto } from 'src/app/shared/dto/stream.dto';

@Component({
  selector: 'app-load-streams-by-game-id',
  templateUrl: './load-streams-by-game-id.component.html',
  styleUrls: ['./load-streams-by-game-id.component.scss']
})
export class LoadStreamsByGameIdComponent {
  game = {
    title: 'Sons of the Forest',
    image: 'https://static-cdn.jtvnw.net/ttv-boxart/515479_IGDB-144x192.jpg',
    viewers: '50',
    followers: '150',
    tags: ['tag1', 'tag2']
  };
  streams$?: Observable<StreamDto[]>;
  streamsInFrench$?: Observable<StreamDto[]>;

  constructor(private route: ActivatedRoute, private streamService: StreamService) {

  }

  ngOnInit(): void {
    this.streams$ = this.route.params.pipe(
      switchMap(params => this.streamService.getStreamByGameId$(params["gameId"])
      ));
    this.streamsInFrench$ = this.route.params.pipe(
      switchMap(params => this.streamService.getStreamByGameIdByLanguage$(params["gameId"],"fr")
      ));
  }

}
