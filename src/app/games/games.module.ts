import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesRoutingModule } from './games-routing.module';
import { TopGamesComponent } from './feature/top-games/top-games.component';
import { GameComponent } from './ui/game/game.component';

@NgModule({
  declarations: [
    TopGamesComponent,
    GameComponent
  ],
  imports: [
    CommonModule,
    GamesRoutingModule
  ]
})
export class GamesModule {

}
