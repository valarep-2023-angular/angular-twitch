import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GamesServiceService } from 'src/app/shared/data-access/games/games.service';
import { GameDto } from 'src/app/shared/dto/game.dto';
import { Game } from 'src/app/shared/dto/game';
@Component({
  selector: 'app-load-gaming-streams',
  templateUrl: './load-gaming-streams.component.html',
  styleUrls: ['./load-gaming-streams.component.scss']
})
export class LoadGamingStreamsComponent implements OnInit {

  games$?: Observable<Game[]>;

  constructor(private gameService: GamesServiceService) {
  }

  ngOnInit(): void {
    this.games$ = this.gameService.getTopGames();
  }

  streams = [
    {
      image: 'https://static-cdn.jtvnw.net/previews-ttv/live_user_meloniemac-440x248.jpg',
      title: 'Ura biggit harry [Hard/ Hufflepuff]',
      avatar: 'https://static-cdn.jtvnw.net/jtv_user_pictures/1a9da63c-0934-452e-9360-13e2c4f23799-profile_image-50x50.png',
      streamer: 'MelonieMac',
      game: 'Hogwarts Legacy',
      tags: ['Christian'],
      viewers: '50'
    },
    {
      image: 'https://static-cdn.jtvnw.net/previews-ttv/live_user_fengrush-440x248.jpg',
      title: 'LEARNIN',
      avatar: 'https://static-cdn.jtvnw.net/jtv_user_pictures/662cd845a9342f2e-profile_image-50x50.jpeg',
      streamer: 'FENGRUSH',
      game: 'Company of Heroes 3',
      tags: ['English'],
      viewers: '50'
    }

  ];

}
