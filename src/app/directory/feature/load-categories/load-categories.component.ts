import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, map, Subscription, switchMap, tap } from 'rxjs';
import { GamesServiceService } from 'src/app/shared/data-access/games/games.service';
import { Game } from "../../../shared/dto/game";

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
            slug: category.id,
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

  streams = [
    {
      image: 'https://static-cdn.jtvnw.net/previews-ttv/live_user_meloniemac-440x248.jpg',
      title: 'Ura biggit harry [Hard/ Hufflepuff]',
      avatar: 'https://static-cdn.jtvnw.net/jtv_user_pictures/1a9da63c-0934-452e-9360-13e2c4f23799-profile_image-50x50.png',
      streamer: 'MelonieMac',
      game: 'Hogwarts Legacy',
      tags: ['Christian'],
      viewers: '50'
    },
    {
      image: 'https://static-cdn.jtvnw.net/previews-ttv/live_user_fengrush-440x248.jpg',
      title: 'LEARNIN',
      avatar: 'https://static-cdn.jtvnw.net/jtv_user_pictures/662cd845a9342f2e-profile_image-50x50.jpeg',
      streamer: 'FENGRUSH',
      game: 'Company of Heroes 3',
      tags: ['English'],
      viewers: '50'
    }

  ];


}
