import { Component } from '@angular/core';

@Component({
  selector: 'app-load-categories',
  templateUrl: './load-categories.component.html',
  styleUrls: ['./load-categories.component.scss']
})
export class LoadCategoriesComponent {
  games = [
    {
      title: 'Sons of the Forest',
      subTitle: '455 spectateurs',
      image: 'https://static-cdn.jtvnw.net/ttv-boxart/515479_IGDB-285x380.jpg',
      tags: ['tag1', 'tag2'],
      link: '#'
    },
    {
      title: 'Counter Strike Global Offensive',
      subTitle: '455 spectateurs',
      image: 'https://static-cdn.jtvnw.net/ttv-boxart/32399_IGDB-285x380.jpg',
      tags: ['tag1', 'tag2'],
      link: '#'
    },
    {
      title: 'Atomic Heart',
      subTitle: '455 spectateurs',
      image: 'https://static-cdn.jtvnw.net/ttv-boxart/505963_IGDB-285x380.jpg',
      tags: ['tag1', 'tag2'],
      link: '#'
    },
    {
      title: 'Diablo III',
      subTitle: '455 spectateurs',
      image: 'https://static-cdn.jtvnw.net/ttv-boxart/313558_IGDB-285x380.jpg',
      tags: ['tag1', 'tag2'],
      link: '#'
    },
    {
      title: 'Team Fight Tactics',
      subTitle: '455 spectateurs',
      image: 'https://static-cdn.jtvnw.net/ttv-boxart/513143-285x380.jpg',
      tags: ['tag1', 'tag2'],
      link: '#'
    },
    {
      title: 'Lost Ark',
      subTitle: '455 spectateurs',
      image: 'https://static-cdn.jtvnw.net/ttv-boxart/490100-285x380.jpg',
      tags: ['tag1', 'tag2'],
      link: '#'
    },
    {
      title: 'Music',
      subTitle: '455 spectateurs',
      image: 'https://static-cdn.jtvnw.net/ttv-boxart/26936-285x380.jpg',
      tags: ['tag1', 'tag2'],
      link: '#'
    },
    {
      title: 'GTA V',
      subTitle: '455 spectateurs',
      image: 'https://static-cdn.jtvnw.net/ttv-boxart/32982_IGDB-285x380.jpg',
      tags: ['tag1', 'tag2'],
      link: '#'
    },
    {
      title: 'World of Warcraft',
      subTitle: '455 spectateurs',
      image: 'https://static-cdn.jtvnw.net/ttv-boxart/18122-285x380.jpg',
      tags: ['tag1', 'tag2'],
      link: '#'
    },
    {
      title: 'Valorant',
      subTitle: '455 spectateurs',
      image: 'https://static-cdn.jtvnw.net/ttv-boxart/517226-285x380.jpg',
      tags: ['tag1', 'tag2'],
      link: '#'
    },
    {
      title: 'Diablo II',
      subTitle: '455 spectateurs',
      image: 'https://static-cdn.jtvnw.net/ttv-boxart/1788326126_IGDB-285x380.jpg',
      tags: ['tag1', 'tag2'],
      link: '#'
    },
    {
      title: 'Pools, Hot Tubs & Beach',
      subTitle: '455 spectateurs',
      image: 'https://static-cdn.jtvnw.net/ttv-boxart/116747788-285x380.jpg',
      tags: ['tag1', 'tag2'],
      link: '#'
    },
    {
      title: 'Talk shows & Podcasts',
      subTitle: '455 spectateurs',
      image: 'https://static-cdn.jtvnw.net/ttv-boxart/417752-285x380.jpg',
      tags: ['tag1', 'tag2'],
      link: '#'
    },
    {
      title: 'League of Legends',
      subTitle: '455 spectateurs',
      image: 'https://static-cdn.jtvnw.net/ttv-boxart/League%20of%20Legends-285x380.jpg',
      tags: ['tag1', 'tag2'],
      link: '#'
    },
    {
      title: 'Apex',
      subTitle: '455 spectateurs',
      image: 'https://static-cdn.jtvnw.net/ttv-boxart/511224-285x380.jpg',
      tags: ['tag1', 'tag2'],
      link: '#'
    },
    {
      title: 'Dota 2',
      subTitle: '455 spectateurs',
      image: 'https://static-cdn.jtvnw.net/ttv-boxart/Dota%202-285x380.jpg',
      tags: ['tag1', 'tag2'],
      link: '#'
    },
    {
      title: 'Hearthstone',
      subTitle: '455 spectateurs',
      image: 'https://static-cdn.jtvnw.net/ttv-boxart/Hearthstone-285x380.jpg',
      tags: ['tag1', 'tag2'],
      link: '#'
    },
    {
      title: 'Overwatch',
      subTitle: '455 spectateurs',
      image: 'https://static-cdn.jtvnw.net/ttv-boxart/Overwatch-285x380.jpg',
      tags: ['tag1', 'tag2'],
      link: '#'
    },
    {
      title: 'Fortnite',
      subTitle: '455 spectateurs',
      image: 'https://static-cdn.jtvnw.net/ttv-boxart/Fortnite-285x380.jpg',
      tags: ['tag1', 'tag2'],
      link: '#'
    },
    {
      title: 'Call of Duty',
      subTitle: '455 spectateurs',
      image: 'https://static-cdn.jtvnw.net/ttv-boxart/Call%20of%20Duty-285x380.jpg',
      tags: ['tag1', 'tag2'],
      link: '#'
    },
    {
      title: 'Counter-Strike',
      subTitle: '455 spectateurs',
      image: 'https://static-cdn.jtvnw.net/ttv-boxart/Counter-Strike-285x380.jpg',
      tags: ['tag1', 'tag2'],
      link: '#'
    },
    {
      title: 'StarCraft II',
      subTitle: '455 spectateurs',
      image: 'https://static-cdn.jtvnw.net/ttv-boxart/StarCraft%20II-285x380.jpg',
      tags: ['tag1', 'tag2'],
      link: '#'
    },
    {
      title: 'Minecraft',
      subTitle: '455 spectateurs',
      image: 'https://static-cdn.jtvnw.net/ttv-boxart/Minecraft-285x380.jpg',
      tags: ['tag1', 'tag2'],
      link: '#'
    },
    {
      title: 'Just Chatting',
      subTitle: '455 spectateurs',
      image: 'https://static-cdn.jtvnw.net/ttv-boxart/Just%20Chatting-285x380.jpg',
      tags: ['tag1', 'tag2'],
      link: '#'
    }
  ];
}
