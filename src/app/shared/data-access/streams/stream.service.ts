import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {StreamDataDto} from '../../dto/stream-data.dto';

@Injectable({
  providedIn: 'root'
})

export class StreamService {

  constructor(private http: HttpClient) {

  }

  getStreamByGameId(id: number): Observable<StreamDataDto> {
    return this.http.get<StreamDataDto>(`/streams?game_id=${id}`);
  }

  getStreamByGameIdAfter(id: number,pagination: string): Observable<StreamDataDto> {
    return this.http.get<StreamDataDto>(`/streams?game_id=${id}&after=${pagination}`);
  }

  getStreamByGameIdBefore(id: number,pagination: string): Observable<StreamDataDto> {
    return this.http.get<StreamDataDto>(`/streams?game_id=${id}&before=${pagination}`);
  }

}
