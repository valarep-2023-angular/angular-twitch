import {Meta, moduleMetadata, Story} from "@storybook/angular";
import {NgHeroiconsModule} from "@dimaslz/ng-heroicons";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MediaObjectComponent} from "../../media-object/media-object.component";
import {GameCardComponent} from "../../game-card/game-card.component";
import {MainHeaderComponent} from "../../headers/main-header/main-header.component";
import {MainNavComponent} from "../../navigation/main-nav/main-nav.component";
import {MainNavItemComponent} from "../../navigation/main-nav-item/main-nav-item.component";
import {TabsComponent} from "../../navigation/tabs/tabs.component";
import {LayoutWithSideMenuComponent} from "../../layout-with-side-menu/layout-with-side-menu.component";
import {
  DesktopSideMenuContentComponent
} from "../../layout-with-side-menu/desktop-side-menu-content/desktop-side-menu-content.component";
import {
  MobileSideMenuContentComponent
} from "../../layout-with-side-menu/mobile-side-menu-content/mobile-side-menu-content.component";
import {
  SideMenuSubTitleComponent
} from "../../layout-with-side-menu/side-menu-sub-title/side-menu-sub-title.component";
import {TagComponent} from "../../tag/tag.component";
import {RouterTestingModule} from "@angular/router/testing";

export default {
  title: 'Screens/Directory (Parcourir)/All',
  component: LayoutWithSideMenuComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        DesktopSideMenuContentComponent,
        MobileSideMenuContentComponent,
        SideMenuSubTitleComponent,
        MediaObjectComponent,
        GameCardComponent,
        MainHeaderComponent,
        MainNavComponent,
        MainNavItemComponent,
        TabsComponent,
        TagComponent
      ],
      imports: [
        BrowserAnimationsModule,
        NgHeroiconsModule,
        RouterTestingModule
      ],
    })
  ],
  args: {
    games: [
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
    ],
    channels: [
      {
        image: 'https://static-cdn.jtvnw.net/jtv_user_pictures/7e03390b-82d1-44e8-a4b5-c895475b2f43-profile_image-70x70.png',
        title: 'Lyelz',
        subTitle: 'Ragnarok Online',
        amount: '35'
      },
      {
        image: 'https://static-cdn.jtvnw.net/jtv_user_pictures/f3591dbe4ee3d94b-profile_image-70x70.png',
        title: 'loltyler1',
        subTitle: 'League of Legends',
        amount: '18,7k'
      },
      {
        image: 'https://static-cdn.jtvnw.net/jtv_user_pictures/417eda85-3794-490e-80d3-4df231522384-profile_image-70x70.png',
        title: 'diabliohighway_',
        subTitle: 'Diablo III',
        amount: '7'
      },
      {
        image: 'https://static-cdn.jtvnw.net/jtv_user_pictures/4400791a-cace-4ea5-9569-62db385ce1dd-profile_image-70x70.png',
        title: 'ClaudioMichaux',
        subTitle: 'Evénements spéciaux',
        amount: '1,8k'
      },
      {
        image: 'https://static-cdn.jtvnw.net/jtv_user_pictures/toymchne_-profile_image-d53305f3fc95d420-70x70.png',
        title: 'Toymchne_',
        subTitle: 'Guild Wars 2',
        amount: '16'
      },
      {
        image: 'https://static-cdn.jtvnw.net/jtv_user_pictures/53191e50-a12d-424f-8806-4b7c9cb0526e-profile_image-70x70.png',
        title: 'alvarotv23',
        subTitle: 'Ragnarok Online',
        amount: '43'
      },
      {
        image: 'https://static-cdn.jtvnw.net/jtv_user_pictures/d456df98-0b4a-4aed-a01c-96a5f75bfad4-profile_image-70x70.png',
        title: 'vVanderZ',
        subTitle: 'Ragnarok Online',
        amount: '23'
      },
      {
        image: 'https://static-cdn.jtvnw.net/jtv_user_pictures/e760df9a-224d-481e-905b-bbd86810040a-profile_image-70x70.png',
        title: 'Engidim',
        subTitle: 'Ragnarok Online',
        amount: '20'
      },
      {
        image: 'https://static-cdn.jtvnw.net/jtv_user_pictures/6affd99a-efe4-4565-878a-befb355df42a-profile_image-70x70.png',
        title: 'icatas',
        subTitle: 'Sons of the Forest',
        amount: '192'
      }
    ],
  }
} as Meta<LayoutWithSideMenuComponent>

const exampleTemplate: Story = (args) => ({
  props: args,
  template: `
      <app-layout-with-side-menu [title]="title">
          <app-desktop-side-menu-content>

          <app-side-menu-sub-title>
              <heart-outline-icon class="mr-2"/>
              <span>Chaînes suivies</span>
          </app-side-menu-sub-title>

           <app-media-object *ngFor="let channel of channels"
            [image]="channel.image"
            [title]="channel.title"
            [subtitle]="channel.subTitle"
            [amount]="channel.amount"
            />

          <app-side-menu-sub-title>
              <fire-outline-icon class="mr-2 mt-2"/>
              <span>Chaînes recommandées</span>
          </app-side-menu-sub-title>

            <app-media-object *ngFor="let channel of channels"
            [image]="channel.image"
            [title]="channel.title"
            [subtitle]="channel.subTitle"
            [amount]="channel.amount"
            />

          </app-desktop-side-menu-content>

          <app-mobile-side-menu-content>

           <app-side-menu-sub-title>
              <heart-outline-icon class="mr-2"/>
              <span>Chaînes suivies</span>
          </app-side-menu-sub-title>

           <app-media-object *ngFor="let channel of channels"
            [image]="channel.image"
            [title]="channel.title"
            [subtitle]="channel.subTitle"
            [amount]="channel.amount"
            />

            <app-side-menu-sub-title>
              <fire-outline-icon class="mr-2 mt-2"/>
              <span>Chaînes recommandées</span>
          </app-side-menu-sub-title>

            <app-media-object *ngFor="let channel of channels"
            [image]="channel.image"
            [title]="channel.title"
            [subtitle]="channel.subTitle"
            [amount]="channel.amount"
            />

          </app-mobile-side-menu-content>

          <!-- Any content-->
          <div class="bg-gray-900">

              <app-main-header/>

              <app-main-nav/>

              <div class="px-6">

                  <app-tabs></app-tabs>

                  <div role="list" class="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8">

                      <app-game-card *ngFor="let game of games"
                      [title]="game.title"
                      [image]="game.image"
                      [tags]="game.tags"
                      [subTitle]="game.subTitle"
                      />

                  </div>
              </div>
          </div>

      </app-layout-with-side-menu>
  `
});

export const Categories = exampleTemplate.bind({});
Categories.args = { title: 'Angular Twitch Clone' };
