import { Component,  OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, tap } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, switchMap } from 'rxjs/operators';
import { CategoriesService } from 'src/app/shared/data-access/categories/categories.service';
import { GameDto } from 'src/app/shared/dto/game.dto';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit, OnDestroy {
  debounceTime = 500;

  inputWritten: string = "";

  inputSuscription?: Subscription;
  inputSubject$ = new Subject<string>();

  categories: GameDto[] = [];

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.inputSuscription = this.inputSubject$.pipe(
      filter(input => input.length > 0),
      debounceTime(this.debounceTime),
      distinctUntilChanged(),
      switchMap(input => this.categoriesService.getCategoriesByQueries(input)),
    ).subscribe(newInput => {
      this.categories = [...newInput];
    });
  }  

  clearSearchBar(){
    this.inputWritten = "";
    console.log("inputWritten : ",this.inputWritten)
  }

  onInput(e: any) {
    this.inputWritten=e.target.value;
    this.inputSubject$.next(this.inputWritten);
    console.log("new",this.categories);
  }

  ngOnDestroy() {
    if (this.inputSuscription) {
      this.inputSuscription.unsubscribe();
    }
  }
}
