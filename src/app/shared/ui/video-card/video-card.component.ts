import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss']
})
export class VideoCardComponent {
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
  views!: string;
}
