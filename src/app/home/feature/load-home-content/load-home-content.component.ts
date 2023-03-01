import {Component, OnInit} from '@angular/core';
import {HomeService} from "../../data-access/home.service";

@Component({
  selector: 'app-load-home-content',
  templateUrl: './load-home-content.component.html',
  styleUrls: ['./load-home-content.component.scss']
})
export class LoadHomeContentComponent implements OnInit {

  fakeGames: any[] = [];
  fakeStreams: any[] = [];

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.fakeGames = this.homeService.getFakeGames();
    this.fakeStreams = this.homeService.getFakeStreams();
  }

}
