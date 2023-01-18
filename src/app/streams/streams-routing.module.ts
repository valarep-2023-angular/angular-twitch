import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetStreamsByGameIdComponent } from './feature/get-streams-by-game-id/get-streams-by-game-id.component';

const routes: Routes = [
  {path: ':gameId',component:GetStreamsByGameIdComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StreamsRoutingModule { }
