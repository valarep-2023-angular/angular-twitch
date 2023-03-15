import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ClipsService } from 'src/app/shared/data-access/clips/clips.service';
import { ClipDto } from 'src/app/shared/dto/clip.dto';

@Component({
  selector: 'app-load-clips-by-game-id',
  templateUrl: './load-clips-by-game-id.component.html',
  styleUrls: ['./load-clips-by-game-id.component.scss']
})
export class LoadClipsByGameIdComponent implements OnInit{

  clips$?: Observable<ClipDto[]>
  constructor(private clipsService: ClipsService) {
    
  }
  ngOnInit(): void {
    this.clips$ = this.clipsService.getClipsByGamesId(21779);
  }


}
