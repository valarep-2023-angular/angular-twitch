import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { StreamService } from '../../data-access/stream.service';
import { StreamData } from '../../utils/stream-data';

@Component({
  selector: 'app-get-streams-by-game-id',
  templateUrl: './get-streams-by-game-id.component.html',
  styleUrls: ['./get-streams-by-game-id.component.scss']
})
export class GetStreamsByGameIdComponent {
    
  streamData$?: Observable<StreamData>;

  constructor(private route:ActivatedRoute,private streamService:StreamService){

  }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("gameId") || 1;
    this.streamData$ = this.streamService.getStreamByGameId(+id);
  }
}
