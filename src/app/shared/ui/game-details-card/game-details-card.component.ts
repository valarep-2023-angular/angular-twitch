import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-game-details-card',
  templateUrl: './game-details-card.component.html',
  styleUrls: ['./game-details-card.component.scss']
})
export class GameDetailsCardComponent {

  @Output()
  follow = new EventEmitter();

  @Input()
  id!: string;

  @Input()
  title!: string;

  @Input()
  image!: string;

  @Input()
  viewers!: string;

  @Input()
  followers!: string;

  @Input()
  tags: [] = [];
}
