import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent {

  private interval: any;
  showDuration = false;
  duration = '';

  //TODO

  // constructor(private datePipe: DatePipe) {}

  // ngOnInit() {
  //   const myDate = new Date('2022-01-01');
  //   this.updateDuration(myDate);
  //   this.interval = setInterval(() => this.updateDuration(myDate), 1000);
  // }

  // ngOnDestroy() {
  //   clearInterval(this.interval);
  // }

  // updateDuration(date: Date) {
  //   const now = new Date();
  //   const diff = Math.abs(now.getTime() - date.getTime());
  //   const diffDate = new Date(diff);
  //   this.duration = this.datePipe.transform(diffDate, 'HH:mm:ss');
  //   this.showDuration = true;
  // }

  @Input()
  url!: string;

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
