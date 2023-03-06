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

  streams$?: Observable<StreamDto[]>;
  streamsInFrench$?: Observable<StreamDto[]>

  constructor(private route: ActivatedRoute, private streamService: StreamService) {

  }

  ngOnInit(): void {
    this.streams$ = this.streamService.getStreams();
    this.streamsInFrench$ = this.streamService.getStreamsByLanguage("fr");
  }
}
