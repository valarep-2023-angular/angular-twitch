import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ClipDataDto } from '../../dto/clip-data.dto';
import { ClipDto } from '../../dto/clip.dto';

@Injectable({
  providedIn: 'root'
})
export class ClipsService {

  constructor(private http: HttpClient) { }

  getClipsByGamesId(id: number): Observable<ClipDto[]> {
    return this.http.get<ClipDataDto>(`/clips?game_id=${id}`).pipe(
      map(response => response.data)
    )
  }
}
