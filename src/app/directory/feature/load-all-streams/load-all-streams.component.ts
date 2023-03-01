import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { StreamService } from 'src/app/shared/data-access/streams/stream.service';
import { StreamDto } from '../../../shared/dto/stream.dto';

@Component({
  selector: 'app-load-all-streams',
  templateUrl: './load-all-streams.component.html',
  styleUrls: ['./load-all-streams.component.scss']
})
export class LoadAllStreamsComponent {

  stream$?: Observable<StreamDto[]>; 

  constructor(private route: ActivatedRoute, private streamService: StreamService) {
    this.stream$ = this.streamService.getStreams();
  }
}
