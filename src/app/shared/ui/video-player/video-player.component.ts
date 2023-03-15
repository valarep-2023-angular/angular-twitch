import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent {
  @Input()
  url!: SafeResourceUrl;

  @Input()
  title!: string;

  @Input()
  avatar!: string;

  @Input()
  streamer!: string;

  @Input()
  game!: string;

  @Input()
  viewers!: string;

  @Input()
  tags: string[] = [];

  @Input()
  startAt!: Date;
}
