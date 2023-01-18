import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StreamData } from '../utils/stream-data';

@Injectable({
  providedIn: 'root'
})
export class StreamServiceService {

  constructor(private http :HttpClient) {
    
  }

getStreamsAll(): Observable<StreamData> {
  return this.http.get<StreamData>('https://api.twitch.tv/helix/streams');
}

}
