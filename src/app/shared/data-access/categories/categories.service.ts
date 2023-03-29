import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GameDataDto } from '../../dto/game-data.dto';
import { GameDto } from '../../dto/game.dto';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  getCategoriesByQueries(value: string): Observable<GameDto[]>{
    return this.http.get<GameDataDto>(`/search/categories?query=${value}&first=50`).pipe(
      map(response => response.data)
    );
  }
}
