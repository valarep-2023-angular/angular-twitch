import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StreamData } from '../utils/stream-data';

@Injectable({
  providedIn: 'root'
})

export class StreamService {

  constructor(private http: HttpClient) {

  }

  getStreamsAll(): Observable<StreamData> {
    return this.http.get<StreamData>(`/streams`);
  }

  getStreamByGameId(id: number): Observable<StreamData> {
    return this.http.get<StreamData>(`/streams?game_id=${id}`);
  }

}
