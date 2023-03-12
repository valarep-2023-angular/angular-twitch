import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { StreamDataDto } from '../../dto/stream-data.dto';
import { StreamDto } from '../../dto/stream.dto';
import { UserDto } from '../../dto/user.dto';
import { UsersService } from '../users/users.service';

@Injectable({
  providedIn: 'root'
})

export class StreamService {

  constructor(private http: HttpClient, private userService: UsersService) {

  }

  getStreams$(): Observable<StreamDto[]> {
    return this.http.get<StreamDataDto>(`/streams`).pipe(
      map(response => response.data),
      mergeMap(streams => {
        const userObservables = streams.map(stream => this.userService.getUserById$(stream.user_id));
        return forkJoin(userObservables).pipe(
          map(user => {
            return streams.map((stream, index) => ({
              ...stream,
              user: user[index][0]
            }))
          })
        )
      })
    );
  }

  getStreamsByLanguage$(lang: string): Observable<StreamDto[]> {
    return this.http.get<StreamDataDto>(`/streams?language=${lang}`).pipe(
      map(response => response.data),
      mergeMap(streams => {
        const userObservables = streams.map(stream => this.userService.getUserById$(stream.user_id));
        return forkJoin(userObservables).pipe(
          map(user => {
            return streams.map((stream, index) => ({
              ...stream,
              user: user[index][0]
            }))
          })
        )
      })
    );
  }

  getStreamByGameId$(id: number): Observable<StreamDto> {
    return this.http.get<StreamDto>(`/streams?game_id=${id}`);
  }
}
