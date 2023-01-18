import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from '../../data-access/game.dto';
import { GamesServiceService } from '../../data-access/games-service.service';

@Component({
  selector: 'app-top-games',
  templateUrl: './top-games.component.html',
  styleUrls: ['./top-games.component.scss']
})
export class TopGamesComponent  implements OnInit {

    games$? : Observable<Game[]>;
  
    constructor(private gameService: GamesServiceService){
      
    }
  
    ngOnInit(): void {
      this.games$ = this.gameService.getTopGames();
    }
  }

