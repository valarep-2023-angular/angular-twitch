import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TwitchResponseDto} from './twitch-response.dto';
import {pluck} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TwitchService {

  constructor(private readonly http: HttpClient) {
  }

  getAll<T>(apiPath: string): Observable<T[]> {
    return this.http.get<TwitchResponseDto<T>>(apiPath).pipe(pluck('data'));
  }

  getOne<T>(apiPath: string): Observable<T> {
    return this.http.get<TwitchResponseDto<T>>(apiPath).pipe(pluck('data', 0));
  }

}

