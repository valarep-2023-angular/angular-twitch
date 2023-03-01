import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectoryRoutingModule } from './directory-routing.module';
import { LoadCategoriesComponent } from './feature/load-categories/load-categories.component';
import { LoadAllStreamsComponent } from './feature/load-all-streams/load-all-streams.component';
import { LoadCreativeStreamsComponent } from './feature/load-creative-streams/load-creative-streams.component';
import { LoadGamingStreamsComponent } from './feature/load-gaming-streams/load-gaming-streams.component';
import { LoadIrlStreamsComponent } from './feature/load-irl-streams/load-irl-streams.component';
import { LoadMusicStreamsComponent } from './feature/load-music-streams/load-music-streams.component';
import { LoadStreamsByGameIdComponent } from './feature/load-streams-by-game-id/load-streams-by-game-id.component';
import { LoadVideosByGameIdComponent } from './feature/load-videos-by-game-id/load-videos-by-game-id.component';
import { LoadClipsByGameIdComponent } from './feature/load-clips-by-game-id/load-clips-by-game-id.component';
import {SharedModule} from "../shared/shared.module";
import { Resize } from '../shared/utils/pipes/resize/resize.pipe';


@NgModule({
  declarations: [
    LoadCategoriesComponent,
    LoadAllStreamsComponent,
    LoadCreativeStreamsComponent,
    LoadGamingStreamsComponent,
    LoadIrlStreamsComponent,
    LoadMusicStreamsComponent,
    LoadStreamsByGameIdComponent,
    LoadVideosByGameIdComponent,
    LoadClipsByGameIdComponent,
    Resize
  ],
  imports: [
    CommonModule,
    DirectoryRoutingModule,
    SharedModule    
  ]
})
export class DirectoryModule { }
