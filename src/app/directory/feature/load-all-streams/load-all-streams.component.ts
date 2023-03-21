import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BehaviorSubject, map, Observable, Subscription, switchMap, tap} from 'rxjs';
import {StreamService} from 'src/app/shared/data-access/streams/stream.service';
import {StreamDto} from '../../../shared/dto/stream.dto';

@Component({
  selector: 'app-load-all-streams',
  templateUrl: './load-all-streams.component.html',
  styleUrls: ['./load-all-streams.component.scss'],
})
export class LoadAllStreamsComponent implements OnInit, OnDestroy {

  private streamsNextCursor?: string;
  private streamsPaginationSubject$ = new BehaviorSubject(this.streamsNextCursor);
  private streamsPaginationSubscription?: Subscription;
  streams: StreamDto[] = [];

  streamsInFrench$?: Observable<StreamDto[]>

  constructor(private route: ActivatedRoute, private streamService: StreamService) {

  }

  ngOnInit(): void {
    this.streamsPaginationSubscription = this.streamsPaginationSubject$.pipe(
      switchMap(nextCursor => this.streamService.getStreamsAfter$(50, nextCursor)),
      tap(streams => this.streamsNextCursor = streams.pagination.cursor),
      map(streams => streams.data)
    ).subscribe(newStreams => {
      this.streams = [...this.streams, ...newStreams];
    });

    this.streamsPaginationSubject$.next(this.streamsNextCursor);

    this.streamsInFrench$ = this.streamService.getStreamsByLanguage$("fr");
  }

  onScroll(): void {
    console.log('next', this.streamsNextCursor);
    this.streamsPaginationSubject$.next(this.streamsNextCursor);
  }

  ngOnDestroy(): void {
    if(this.streamsPaginationSubscription) {
      this.streamsPaginationSubscription.unsubscribe();
    }
  }

}
