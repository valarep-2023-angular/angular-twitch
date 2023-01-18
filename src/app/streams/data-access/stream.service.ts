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

  getStreamByGameId(id: number): Observable<Stream[]> {
    return this.http.get<StreamData>(`/streams?game_id=${id}`).pipe(
      map(response=>response.data)
    );
  }

}
