import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { StreamService } from '../../data-access/stream.service';
import { StreamData } from '../../utils/stream-data';
@Component({
  selector: 'app-get-streams-by-game-id',
  templateUrl: './get-streams-by-game-id.component.html',
  styleUrls: ['./get-streams-by-game-id.component.scss']
})

export class GetStreamsByGameIdComponent {

  streamData$?: Observable<StreamData>;

  constructor(private route: ActivatedRoute, private streamService: StreamService) {

  }
  ngOnInit(): void {
    this.streamData$ =this.route.params.pipe(
          switchMap(params =>this.streamService.getStreamByGameId(params["gameId"])
        ));

  }

  before(cursor: string): void {
    this.streamData$ =this.route.params.pipe(
      switchMap(params =>this.streamService.getStreamByGameIdBefore(params["gameId"],cursor)
    ));
  }

  after(cursor: string): void {
    this.streamData$ =this.route.params.pipe(
      switchMap(params =>this.streamService.getStreamByGameIdAfter(params["gameId"],cursor)
    ));
  }


}


