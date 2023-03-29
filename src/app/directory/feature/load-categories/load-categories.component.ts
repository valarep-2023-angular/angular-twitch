import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, BehaviorSubject, switchMap, tap, map } from 'rxjs';
import { GamesServiceService } from 'src/app/shared/data-access/games/games.service';
import { Game } from 'src/app/shared/dto/game';
import { GameDto } from 'src/app/shared/dto/game.dto';
@Component({
  selector: 'app-load-categories',
  templateUrl: './load-categories.component.html',
  styleUrls: ['./load-categories.component.scss']
})
export class LoadCategoriesComponent implements OnInit {
  // games$?: Observable<Game[]>;
  private categoriesNextCursor?: string;
  private categoriesPaginationSubject$ = new BehaviorSubject(this.categoriesNextCursor);
  private categoriesPaginationSubscription?: Subscription;
  games$: Game[] = [];
  constructor(private gameService: GamesServiceService) {
  }

  // ngOnInit(): void {
  //   this.games$ = this.gameService.getCategorie();
  // }

  ngOnInit(): void {
    this.categoriesPaginationSubscription = this.categoriesPaginationSubject$.pipe(
      switchMap(nextCursor => this.gameService.getCategoriesAfter$(50, nextCursor)),
      tap(games$ => this.categoriesNextCursor = games$.pagination.cursor),
      map(games$ => games$.data)
    ).subscribe(newGames => {
      this.games$ = [...this.games$, ...newGames];
    });
  }

  onScroll(): void {
    console.log('next', this.categoriesNextCursor);
    this.categoriesPaginationSubject$.next(this.categoriesNextCursor);
  }
}