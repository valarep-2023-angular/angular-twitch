import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import {map, mergeMap} from 'rxjs/operators';

@Component({
  selector: 'app-stream-player',
  templateUrl: './stream-player.component.html',
  styleUrls: ['./stream-player.component.scss']
})
export class StreamPlayerComponent {

  urlStream!: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void{
    this.urlStream = environment.twitch.streamPlayerUrl+"otplol_";
  }


}