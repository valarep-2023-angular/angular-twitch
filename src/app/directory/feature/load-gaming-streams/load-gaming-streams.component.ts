import {Component} from '@angular/core';

@Component({
  selector: 'app-load-gaming-streams',
  templateUrl: './load-gaming-streams.component.html',
  styleUrls: ['./load-gaming-streams.component.scss']
})
export class LoadGamingStreamsComponent {

  games = [
    {
      title: 'Sons of the Forest',
      slug: 'sons-of-the-forest',
      subTitle: '455 spectateurs',
      image: 'https://static-cdn.jtvnw.net/ttv-boxart/515479_IGDB-285x380.jpg',
      tags: ['tag1', 'tag2']
    },
    {
      title: 'Counter Strike Global Offensive',
      slug: 'counter-strike-global-offensive',
      subTitle: '455 spectateurs',
      image: 'https://static-cdn.jtvnw.net/ttv-boxart/32399_IGDB-285x380.jpg',
      tags: ['tag1', 'tag2']
    },
    {
      title: 'Atomic Heart',
      slug: 'atomic-heart',
      subTitle: '455 spectateurs',
      image: 'https://static-cdn.jtvnw.net/ttv-boxart/505963_IGDB-285x380.jpg',
      tags: ['tag1', 'tag2']
    },
    {
      title: 'Diablo III',
      slug: 'diablo-iii',
      subTitle: '455 spectateurs',
      image: 'https://static-cdn.jtvnw.net/ttv-boxart/313558_IGDB-285x380.jpg',
      tags: ['tag1', 'tag2']
    },
    {
      title: 'Team Fight Tactics',
      slug: 'team-fight-tactics',
      subTitle: '455 spectateurs',
      image: 'https://static-cdn.jtvnw.net/ttv-boxart/513143-285x380.jpg',
      tags: ['tag1', 'tag2']
    },
    {
      title: 'Lost Ark',
      slug: 'lost-ark',
      subTitle: '455 spectateurs',
      image: 'https://static-cdn.jtvnw.net/ttv-boxart/490100-285x380.jpg',
      tags: ['tag1', 'tag2']
    },
    {
      title: 'Music',
      slug: 'music',
      subTitle: '455 spectateurs',
      image: 'https://static-cdn.jtvnw.net/ttv-boxart/26936-285x380.jpg',
      tags: ['tag1', 'tag2']
    },
    {
      title: 'GTA V',
      slug: 'gta-v',
      subTitle: '455 spectateurs',
      image: 'https://static-cdn.jtvnw.net/ttv-boxart/32982_IGDB-285x380.jpg',
      tags: ['tag1', 'tag2']
    }
  ];
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
    },
    {
      image: 'https://static-cdn.jtvnw.net/previews-ttv/live_user_ozku-440x248.jpg',
      title: '🔴 Daditos x2!! - EL Magozku, besto maguito en howartion, cual era mi casa? | !dados !tienda',
      avatar: 'https://static-cdn.jtvnw.net/jtv_user_pictures/f4020214-f9ad-4e3c-9577-e5adf2054f29-profile_image-50x50.png',
      streamer: 'Ozku',
      game: 'Hogwarts Legacy',
      tags: ['spanish', 'ClosedCaptions', 'ESP'],
      viewers: '50'
    },
    {
      image: 'https://static-cdn.jtvnw.net/previews-ttv/live_user_illojuan-440x248.jpg',
      title: '🪓 HOY NOS TOCA TRABAJAR (no se lo cree ni tu prima la coja) - Sons of the Forest ft. Andrés #2',
      avatar: 'https://static-cdn.jtvnw.net/jtv_user_pictures/37454f0e-581b-42ba-b95b-416f3113fd37-profile_image-50x50.png',
      streamer: 'IlloJuan',
      game: 'Sons of the Forest',
      tags: ['DropsActivados', 'Español'],
      viewers: '50'
    },
    {
      image: 'https://static-cdn.jtvnw.net/previews-ttv/live_user_fextralife-440x248.jpg',
      title: '!GIVEAWAY !MAP THE END??? Hogwarts Hard Mode with Yuria',
      avatar: 'https://static-cdn.jtvnw.net/jtv_user_pictures/a28b0d37-81d0-415a-8ed8-1a1f998ea26d-profile_image-50x50.png',
      streamer: 'Fextralife',
      game: 'Hogwarts Legacy',
      tags: ['English', 'hardmode'],
      viewers: '50'
    },
  ];
}
