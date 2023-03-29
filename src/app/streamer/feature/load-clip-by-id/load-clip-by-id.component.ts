import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap, tap } from 'rxjs';
import { ClipsService } from 'src/app/shared/data-access/clips/clips.service';
import { UsersService } from 'src/app/shared/data-access/users/users.service';
import { ClipDto } from 'src/app/shared/dto/clip.dto';
import { UserDto } from 'src/app/shared/dto/user.dto';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-load-clip-by-id',
  templateUrl: './load-clip-by-id.component.html',
  styleUrls: ['./load-clip-by-id.component.scss']
})
export class LoadClipByIdComponent {

  slug! : string;
  user$?: Observable<UserDto>;
  clip$?: Observable<ClipDto>;

  constructor(private clipService:ClipsService, private route: ActivatedRoute, private userService: UsersService){
  }

  ngOnInit(): void {
    console.log("slug : ",this.slug);
    this.user$ = this.route.params.pipe(
      switchMap(params => this.userService.getUserByLogin$(params["streamerName"]))
    );
    this.clip$ = this.route.params.pipe(
      tap(params => this.slug = params["clipId"]),
      switchMap(params => this.clipService.getClipsById$(params["clipId"]))
    )
  }
}
