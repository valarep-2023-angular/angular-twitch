import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { UserDataDto } from '../../dto/user-data.dto';
import { UserDto } from '../../dto/user.dto';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {

  }

  getUserById$(id: number): Observable<UserDto> {
    return this.http.get<UserDto>(`/users?id=${id}`);
  }

  getUsersById$(ids: number[]): Observable<UserDto[]> {
    var param = "";
    ids.forEach(function (id, index) {
      if (index === 0) {
        param = `${id}`;
        return;
      }
      param = `${param}&id=${id}`
    });
    return this.http.get<UserDataDto>(`/users?id=${param}`).pipe(
      map(response => response.data)
    );
  }


}
