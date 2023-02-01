import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Stream } from '../utils/stream';
import { StreamData } from '../utils/stream-data';


@Injectable({
  providedIn: 'root'
})

export class StreamService {

  constructor(private http: HttpClient) {

  }
  getStreamByGameId(id: number): Observable<StreamData> {
    return this.http.get<StreamData>(`/streams?game_id=${id}`);
  }

  getStreamByGameIdAfter(id: number,pagination: any): Observable<StreamData> {
    return this.http.get<StreamData>(`/streams?game_id=${id}&after=${pagination}`);
  }
  
  getStreamByGameIdBefore(id: number,pagination: any): Observable<StreamData> {
    return this.http.get<StreamData>(`/streams?game_id=${id}&before=${pagination}`);
  }

}
