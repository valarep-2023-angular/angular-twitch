import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, tap, concat, forkJoin, of } from 'rxjs';
import { StreamService } from 'src/app/shared/data-access/streams/stream.service';
import { StreamDto } from '../../../shared/dto/stream.dto';

@Component({
  selector: 'app-load-all-streams',
  templateUrl: './load-all-streams.component.html',
  styleUrls: ['./load-all-streams.component.scss']
})
export class LoadAllStreamsComponent {

  limit = 20;
  after?: string;

  streams$?: Observable<StreamDto[]>;
  streamsInFrench$?: Observable<StreamDto[]>

  constructor(private route: ActivatedRoute, private streamService: StreamService) {

  }

  ngOnInit(): void {
    this.streams$ = this.streamService.getStreamsAfter$(this.limit, this.after).pipe(
      tap(response => {
        this.after = response.pagination.cursor;
      }),
      map(response => response.data)
    );
    this.streamsInFrench$ = this.streamService.getStreamsByLanguage$("fr");
  }

  onScroll(): void {
    if (this.streams$) {
      forkJoin([
        this.streams$,
        this.streamService.getStreamsAfter$(this.limit, this.after).pipe(
          tap(response => {
            this.after = response.pagination.cursor;
          }),
          map(response => response.data)
        )
      ]).pipe(
        map(([streams, newStreams]) => [...streams, ...newStreams])
      ).subscribe(streams => {
        this.streams$ = of(streams);
      });
    }
  }
  
}
