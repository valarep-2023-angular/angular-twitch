import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LoadCategoriesComponent} from "./feature/load-categories/load-categories.component";
import {LoadAllStreamsComponent} from "./feature/load-all-streams/load-all-streams.component";
import {LoadIrlStreamsComponent} from "./feature/load-irl-streams/load-irl-streams.component";
import {LoadStreamsByGameIdComponent} from "./feature/load-streams-by-game-id/load-streams-by-game-id.component";
import {LoadVideosByGameIdComponent} from "./feature/load-videos-by-game-id/load-videos-by-game-id.component";
import {LoadCreativeStreamsComponent} from "./feature/load-creative-streams/load-creative-streams.component";
import {LoadMusicStreamsComponent} from "./feature/load-music-streams/load-music-streams.component";
import {LoadGamingStreamsComponent} from "./feature/load-gaming-streams/load-gaming-streams.component";
import {LoadClipsByGameIdComponent} from "./feature/load-clips-by-game-id/load-clips-by-game-id.component";

const routes: Routes = [
  {path: '', component: LoadCategoriesComponent},
  {path: 'all', component: LoadAllStreamsComponent},
  {path: 'creative', component: LoadCreativeStreamsComponent},
  {path: 'gaming', component: LoadGamingStreamsComponent},
  {path: 'irl', component: LoadIrlStreamsComponent},
  {path: 'music', component: LoadMusicStreamsComponent},
  {path: ':gameId', redirectTo: ':gameId/streams'},
  {path: ':gameId/streams', component: LoadStreamsByGameIdComponent},
  {path: ':gameId/videos', component: LoadVideosByGameIdComponent},
  {path: ':gameId/clips', component: LoadClipsByGameIdComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectoryRoutingModule { }
