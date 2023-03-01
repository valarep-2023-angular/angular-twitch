import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { StreamDataDto } from '../../dto/stream-data.dto';
import { StreamDto } from '../../dto/stream.dto';

@Injectable({
  providedIn: 'root'
})

export class StreamService {

  constructor(private http: HttpClient) {

  }

  getStreams(): Observable<StreamDto[]> {
    return this.http.get<StreamDataDto>(`/streams`).pipe(
      map(response => response.data)
    );
  }

  getStreamsByLanguage(lang: string): Observable<StreamDto[]> {
    return this.http.get<StreamDataDto>(`/streams?language=${lang}`).pipe(
      map(response => response.data)
    );
  }

  getStreamByGameId(id: number): Observable<StreamDto[]> {
    return this.http.get<StreamDataDto>(`/streams?game_id=${id}`).pipe(
      map(response => response.data)
    );
  }
}
