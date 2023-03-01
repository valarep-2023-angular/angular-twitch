import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-stream-card',
  templateUrl: './stream-card.component.html',
  styleUrls: ['./stream-card.component.scss']
})
export class StreamCardComponent {

  @Input()
  image!: string;

  @Input()
  title!: string;

  @Input()
  avatar!: string;

  @Input()
  streamer!: string;

  @Input()
  tags: string[] = [];

  @Input()
  game!: string;

  @Input()
  viewers!: string;
}
