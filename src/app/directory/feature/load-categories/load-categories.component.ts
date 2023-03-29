import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GamesServiceService } from 'src/app/shared/data-access/games/games.service';
import { Game } from 'src/app/shared/dto/game';
@Component({
  selector: 'app-load-categories',
  templateUrl: './load-categories.component.html',
  styleUrls: ['./load-categories.component.scss']
})
export class LoadCategoriesComponent implements OnInit {
  games$?: Observable<Game[]>;

  constructor(private gameService: GamesServiceService) {
  }

  ngOnInit(): void {
    this.games$ = this.gameService.getCategorie();
  }

}