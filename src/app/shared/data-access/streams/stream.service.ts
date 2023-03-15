import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map, mergeMap} from 'rxjs/operators';
import {StreamDataDto} from '../../dto/stream-data.dto';
import {StreamDto} from '../../dto/stream.dto';
import {UsersService} from '../users/users.service';

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
        const userIds = streams.map(stream => stream.user_id);
        return this.userService.getUsersById$(userIds).pipe(
          map(users => {
            return streams.map((stream, index) => ({
              ...stream,
              user: users[index]
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
        const userIds = streams.map(stream => stream.user_id);
        return this.userService.getUsersById$(userIds).pipe(
          map(users => {
            return streams.map((stream, index) => ({
              ...stream,
              user: users[index]
            }))
          })
        )
      })
    );
  }

  getStreamsByGameId$(id: number): Observable<StreamDto[]> {
    return this.http.get<StreamDataDto>(`/streams?game_id=${id}`).pipe(
      map(response => response.data),
      mergeMap(streams => {
        const userIds = streams.map(stream => stream.user_id);
        return this.userService.getUsersById$(userIds).pipe(
          map(users => {
            return streams.map((stream, index) => ({
              ...stream,
              user: users[index]
            }))
          })
        )
      })
    );
  }

  getStreamByGameIdByLanguage$(id: number,lang: string): Observable<StreamDto[]> {
    return this.http.get<StreamDataDto>(`/streams?game_id=${id}&language=${lang}`).pipe(
      map(response => response.data),
      mergeMap(streams => {
        const userIds = streams.map(stream => stream.user_id);
        return this.userService.getUsersById$(userIds).pipe(
          map(users => {
            return streams.map((stream, index) => ({
              ...stream,
              user: users[index]
            }))
          })
        )
      })
    );
  }

  getStreamByUserLogin$(login:string):Observable<StreamDto>{
    return this.http.get<StreamDataDto>(`/streams?user_login${login}`).pipe(
      map(response=> response.data[0])
    );
  }
}
