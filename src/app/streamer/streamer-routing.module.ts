import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StreamPlayerComponent } from './feature/load-player-stream/load-player-stream.component';

const routes: Routes = [
  { path: '', component: StreamPlayerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StreamerRoutingModule { }
