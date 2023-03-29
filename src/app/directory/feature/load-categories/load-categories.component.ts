import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, map, Subscription, switchMap, tap} from 'rxjs';
import {GamesServiceService} from 'src/app/shared/data-access/games/games.service';
import {Game} from "../../../shared/dto/game";

@Component({
  selector: 'app-load-categories',
  templateUrl: './load-categories.component.html',
  styleUrls: ['./load-categories.component.scss']
})
export class LoadCategoriesComponent implements OnInit {

  private categoriesNextCursor?: string;
  private categoriesPaginationSubject$ = new BehaviorSubject(this.categoriesNextCursor);
  private categoriesPaginationSubscription?: Subscription;
  categories: Game[] = [];

  constructor(private gameService: GamesServiceService) {
  }

  ngOnInit(): void {
    this.categoriesPaginationSubscription = this.categoriesPaginationSubject$.pipe(
      switchMap(nextCursor => this.gameService.getCategoriesAfter$(50, nextCursor)),
      tap(categories => this.categoriesNextCursor = categories.pagination.cursor),
      map(categories => categories.data),
      map(categories => {
        return categories.map(category => {
          return {
            title: category.name,
            image: category.box_art_url,
            tags: [],
            subTitle: '',
            slug: ''
          }
        })
      })
    ).subscribe(newCategories => {
      this.categories = [...this.categories, ...newCategories];
    });
  }

  onScroll(): void {
    console.log('next', this.categoriesNextCursor);
    this.categoriesPaginationSubject$.next(this.categoriesNextCursor);
  }
}
