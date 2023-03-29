import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadClipByIdComponent } from './feature/load-clip-by-id/load-clip-by-id.component';
import { StreamPlayerComponent } from './feature/load-player-stream/load-player-stream.component';

const routes: Routes = [
  { path: '', component: StreamPlayerComponent },
  { path: 'clip/:clipId', component: LoadClipByIdComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class StreamerRoutingModule { }  
