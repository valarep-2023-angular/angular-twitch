import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { map, mergeMap } from 'rxjs/operators';
import { Observable, switchMap } from 'rxjs';
import { UserDto } from 'src/app/shared/dto/user.dto';
import { UsersService } from 'src/app/shared/data-access/users/users.service';
import { StreamService } from 'src/app/shared/data-access/streams/stream.service';
import { StreamDto } from 'src/app/shared/dto/stream.dto';

@Component({
  selector: 'app-load-player-stream',
  templateUrl: './load-player-stream.component.html',
  styleUrls: ['./load-player-stream.component.scss']
})
export class StreamPlayerComponent {

  urlStream!: string;
  user$?: Observable<UserDto>;
  stream$?: Observable<StreamDto>;

  constructor(private route: ActivatedRoute, private userService: UsersService, private streamService: StreamService) { }

  ngOnInit(): void {
    const login = this.route.snapshot.paramMap.get("streamerName") || "";
    this.urlStream = environment.twitch.streamPlayerUrl + login;
    
    this.user$ = this.route.params.pipe(
      switchMap(params => this.userService.getUserByLogin$(params["streamerName"]))
    );
    this.stream$ = this.route.params.pipe(
      switchMap(params => this.streamService.getStreamByUserLogin$(params["streamerName"]))
    )
  }
}