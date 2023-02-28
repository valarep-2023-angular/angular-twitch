import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent {

  @Input()
  image!: string;

  @Input()
  title!: string;

  @Input()
  subTitle!: string;

  @Input()
  link!: string;

  @Input()
  tags: string[] = [];
}
