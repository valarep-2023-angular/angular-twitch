import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopGamesComponent } from './feature/top-games/top-games.component';

const routes: Routes = [{path: 'top', component: TopGamesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
