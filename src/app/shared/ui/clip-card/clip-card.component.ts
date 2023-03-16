import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-clip-card',
  templateUrl: './clip-card.component.html',
  styleUrls: ['./clip-card.component.scss']
})
export class ClipCardComponent {
  @Input()
  image!: string;

  @Input()
  title!: string;

  @Input()
  avatar!: string;

  @Input()
  streamer!: string;

  @Input()
  duration!: string;

  @Input()
  createdAt!: string;

  @Input()
  views!: number;

  @Input()
  author!: string;
}
