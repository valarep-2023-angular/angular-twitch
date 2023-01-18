import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesRoutingModule } from './games-routing.module';
import { TopGamesComponent } from './feature/top-games/top-games.component';

@NgModule({
  declarations: [
    TopGamesComponent
  ],
  imports: [
    CommonModule,
    GamesRoutingModule
  ]
})
export class GamesModule {

}
