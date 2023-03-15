import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import {map, mergeMap} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { UserDto } from 'src/app/shared/dto/user.dto';
import { UsersService } from 'src/app/shared/data-access/users/users.service';
import { StreamService } from 'src/app/shared/data-access/streams/stream.service';
import { StreamDto } from 'src/app/shared/dto/stream.dto';

@Component({
  selector: 'app-stream-player',
  templateUrl: './stream-player.component.html',
  styleUrls: ['./stream-player.component.scss']
})
export class StreamPlayerComponent {

  urlStream!: string;
  user$!: Observable<UserDto>;
  stream$!:Observable<StreamDto>;

  constructor(private route: ActivatedRoute, private userService: UsersService, private streamService:StreamService) { }

  ngOnInit(): void{
    const login = this.route.snapshot.paramMap.get("streamerName") || "";
    this.urlStream = environment.twitch.streamPlayerUrl+login;
    this.user$ = this.userService.getUserByLogin$(login); 
    this.stream$= this.streamService.getStreamByUserLogin$(login);
  }
}