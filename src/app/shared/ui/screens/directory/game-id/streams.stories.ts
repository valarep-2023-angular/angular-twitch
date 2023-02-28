import {Meta, moduleMetadata, Story} from "@storybook/angular";
import {NgHeroiconsModule} from "@dimaslz/ng-heroicons";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {LayoutWithSideMenuComponent} from "../../../layout-with-side-menu/layout-with-side-menu.component";
import {
  DesktopSideMenuContentComponent
} from "../../../layout-with-side-menu/desktop-side-menu-content/desktop-side-menu-content.component";
import {TabsComponent} from "../../../navigation/tabs/tabs.component";
import {
  MobileSideMenuContentComponent
} from "../../../layout-with-side-menu/mobile-side-menu-content/mobile-side-menu-content.component";
import {MainHeaderComponent} from "../../../headers/main-header/main-header.component";
import {CommonModule} from "@angular/common";
import {GameCardComponent} from "../../../game-card/game-card.component";
import {SideMenuSubTitleComponent} from "../../../layout-with-side-menu/side-menu-sub-title/side-menu-sub-title.component";
import {TabComponent} from "../../../navigation/tab/tab.component";
import {MainNavComponent} from "../../../navigation/main-nav/main-nav.component";
import {MediaObjectComponent} from "../../../media-object/media-object.component";
import {MainNavItemComponent} from "../../../navigation/main-nav-item/main-nav-item.component";
import {StreamCardComponent} from "../../../stream-card/stream-card.component";
import {GameDetailsCardComponent} from "../../../game-details-card/game-details-card.component";
import {ButtonComponent} from "../../../button/button.component";
import {TagComponent} from "../../../tag/tag.component";
import {RouterTestingModule} from "@angular/router/testing";

export default {
  title: 'Screens/Directory (Parcourir)/[GameID]',
  component: LayoutWithSideMenuComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        DesktopSideMenuContentComponent,
        MobileSideMenuContentComponent,
        SideMenuSubTitleComponent,
        MediaObjectComponent,
        StreamCardComponent,
        GameCardComponent,
        GameDetailsCardComponent,
        MainHeaderComponent,
        MainNavComponent,
        MainNavItemComponent,
        TabsComponent,
        TabComponent,
        ButtonComponent,
        TagComponent
      ],
      imports: [
        BrowserAnimationsModule,
        CommonModule,
        NgHeroiconsModule,
        RouterTestingModule
      ],
    })
  ],
  args: {
    game: {
      title: 'Sons of the Forest',
      image: 'https://static-cdn.jtvnw.net/ttv-boxart/515479_IGDB-144x192.jpg',
      viewers: 50,
      followers: 150,
      tags: ['tag1', 'tag2']
    },
    streams: [
      {
        image: 'https://static-cdn.jtvnw.net/previews-ttv/live_user_meloniemac-440x248.jpg',
        title: 'Ura biggit harry [Hard/ Hufflepuff]',
        avatar: 'https://static-cdn.jtvnw.net/jtv_user_pictures/1a9da63c-0934-452e-9360-13e2c4f23799-profile_image-50x50.png',
        streamer: 'MelonieMac',
        game: 'Hogwarts Legacy',
        tags: ['Christian'],
        viewers: 50
      },
      {
        image: 'https://static-cdn.jtvnw.net/previews-ttv/live_user_fengrush-440x248.jpg',
        title: 'LEARNIN',
        avatar: 'https://static-cdn.jtvnw.net/jtv_user_pictures/662cd845a9342f2e-profile_image-50x50.jpeg',
        streamer: 'FENGRUSH',
        game: 'Company of Heroes 3',
        tags: ['English'],
        viewers: 50
      },
      {
        image: 'https://static-cdn.jtvnw.net/previews-ttv/live_user_ozku-440x248.jpg',
        title: '🔴 Daditos x2!! - EL Magozku, besto maguito en howartion, cual era mi casa? | !dados !tienda',
        avatar: 'https://static-cdn.jtvnw.net/jtv_user_pictures/f4020214-f9ad-4e3c-9577-e5adf2054f29-profile_image-50x50.png',
        streamer: 'Ozku',
        game: 'Hogwarts Legacy',
        tags: ['spanish', 'ClosedCaptions', 'ESP'],
        viewers: 50
      },
      {
        image: 'https://static-cdn.jtvnw.net/previews-ttv/live_user_illojuan-440x248.jpg',
        title: '🪓 HOY NOS TOCA TRABAJAR (no se lo cree ni tu prima la coja) - Sons of the Forest ft. Andrés #2',
        avatar: 'https://static-cdn.jtvnw.net/jtv_user_pictures/37454f0e-581b-42ba-b95b-416f3113fd37-profile_image-50x50.png',
        streamer: 'IlloJuan',
        game: 'Sons of the Forest',
        tags: ['DropsActivados', 'Español'],
        viewers: 50
      },
      {
        image: 'https://static-cdn.jtvnw.net/previews-ttv/live_user_fextralife-440x248.jpg',
        title: '!GIVEAWAY !MAP THE END??? Hogwarts Hard Mode with Yuria',
        avatar: 'https://static-cdn.jtvnw.net/jtv_user_pictures/a28b0d37-81d0-415a-8ed8-1a1f998ea26d-profile_image-50x50.png',
        streamer: 'Fextralife',
        game: 'Hogwarts Legacy',
        tags: ['English', 'hardmode'],
        viewers: 50
      },
      {
        image: 'https://static-cdn.jtvnw.net/previews-ttv/live_user_meloniemac-440x248.jpg',
        title: 'Ura biggit harry [Hard/ Hufflepuff]',
        avatar: 'https://static-cdn.jtvnw.net/jtv_user_pictures/1a9da63c-0934-452e-9360-13e2c4f23799-profile_image-50x50.png',
        streamer: 'MelonieMac',
        game: 'Hogwarts Legacy',
        tags: ['Christian'],
        viewers: 50
      },
      {
        image: 'https://static-cdn.jtvnw.net/previews-ttv/live_user_fengrush-440x248.jpg',
        title: 'LEARNIN',
        avatar: 'https://static-cdn.jtvnw.net/jtv_user_pictures/662cd845a9342f2e-profile_image-50x50.jpeg',
        streamer: 'FENGRUSH',
        game: 'Company of Heroes 3',
        tags: ['English'],
        viewers: 50
      },
      {
        image: 'https://static-cdn.jtvnw.net/previews-ttv/live_user_ozku-440x248.jpg',
        title: '🔴 Daditos x2!! - EL Magozku, besto maguito en howartion, cual era mi casa? | !dados !tienda',
        avatar: 'https://static-cdn.jtvnw.net/jtv_user_pictures/f4020214-f9ad-4e3c-9577-e5adf2054f29-profile_image-50x50.png',
        streamer: 'Ozku',
        game: 'Hogwarts Legacy',
        tags: ['spanish', 'ClosedCaptions', 'ESP'],
        viewers: 50
      },
      {
        image: 'https://static-cdn.jtvnw.net/previews-ttv/live_user_illojuan-440x248.jpg',
        title: '🪓 HOY NOS TOCA TRABAJAR (no se lo cree ni tu prima la coja) - Sons of the Forest ft. Andrés #2',
        avatar: 'https://static-cdn.jtvnw.net/jtv_user_pictures/37454f0e-581b-42ba-b95b-416f3113fd37-profile_image-50x50.png',
        streamer: 'IlloJuan',
        game: 'Sons of the Forest',
        tags: ['DropsActivados', 'Español'],
        viewers: 50
      },
      {
        image: 'https://static-cdn.jtvnw.net/previews-ttv/live_user_fextralife-440x248.jpg',
        title: '!GIVEAWAY !MAP THE END??? Hogwarts Hard Mode with Yuria',
        avatar: 'https://static-cdn.jtvnw.net/jtv_user_pictures/a28b0d37-81d0-415a-8ed8-1a1f998ea26d-profile_image-50x50.png',
        streamer: 'Fextralife',
        game: 'Hogwarts Legacy',
        tags: ['English', 'hardmode'],
        viewers: 50
      },
      {
        image: 'https://static-cdn.jtvnw.net/previews-ttv/live_user_meloniemac-440x248.jpg',
        title: 'Ura biggit harry [Hard/ Hufflepuff]',
        avatar: 'https://static-cdn.jtvnw.net/jtv_user_pictures/1a9da63c-0934-452e-9360-13e2c4f23799-profile_image-50x50.png',
        streamer: 'MelonieMac',
        game: 'Hogwarts Legacy',
        tags: ['Christian'],
        viewers: 50
      },
      {
        image: 'https://static-cdn.jtvnw.net/previews-ttv/live_user_fengrush-440x248.jpg',
        title: 'LEARNIN',
        avatar: 'https://static-cdn.jtvnw.net/jtv_user_pictures/662cd845a9342f2e-profile_image-50x50.jpeg',
        streamer: 'FENGRUSH',
        game: 'Company of Heroes 3',
        tags: ['English'],
        viewers: 50
      },
      {
        image: 'https://static-cdn.jtvnw.net/previews-ttv/live_user_ozku-440x248.jpg',
        title: '🔴 Daditos x2!! - EL Magozku, besto maguito en howartion, cual era mi casa? | !dados !tienda',
        avatar: 'https://static-cdn.jtvnw.net/jtv_user_pictures/f4020214-f9ad-4e3c-9577-e5adf2054f29-profile_image-50x50.png',
        streamer: 'Ozku',
        game: 'Hogwarts Legacy',
        tags: ['spanish', 'ClosedCaptions', 'ESP'],
        viewers: 50
      },
      {
        image: 'https://static-cdn.jtvnw.net/previews-ttv/live_user_illojuan-440x248.jpg',
        title: '🪓 HOY NOS TOCA TRABAJAR (no se lo cree ni tu prima la coja) - Sons of the Forest ft. Andrés #2',
        avatar: 'https://static-cdn.jtvnw.net/jtv_user_pictures/37454f0e-581b-42ba-b95b-416f3113fd37-profile_image-50x50.png',
        streamer: 'IlloJuan',
        game: 'Sons of the Forest',
        tags: ['DropsActivados', 'Español'],
        viewers: 50
      },
      {
        image: 'https://static-cdn.jtvnw.net/previews-ttv/live_user_fextralife-440x248.jpg',
        title: '!GIVEAWAY !MAP THE END??? Hogwarts Hard Mode with Yuria',
        avatar: 'https://static-cdn.jtvnw.net/jtv_user_pictures/a28b0d37-81d0-415a-8ed8-1a1f998ea26d-profile_image-50x50.png',
        streamer: 'Fextralife',
        game: 'Hogwarts Legacy',
        tags: ['English', 'hardmode'],
        viewers: 50
      }
    ],
    streamsInFrench: [
      {
        image: 'https://static-cdn.jtvnw.net/previews-ttv/live_user_meloniemac-440x248.jpg',
        title: 'Ura biggit harry [Hard/ Hufflepuff]',
        avatar: 'https://static-cdn.jtvnw.net/jtv_user_pictures/1a9da63c-0934-452e-9360-13e2c4f23799-profile_image-50x50.png',
        streamer: 'MelonieMac',
        game: 'Hogwarts Legacy',
        tags: ['Christian'],
        viewers: 50
      },
      {
        image: 'https://static-cdn.jtvnw.net/previews-ttv/live_user_fengrush-440x248.jpg',
        title: 'LEARNIN',
        avatar: 'https://static-cdn.jtvnw.net/jtv_user_pictures/662cd845a9342f2e-profile_image-50x50.jpeg',
        streamer: 'FENGRUSH',
        game: 'Company of Heroes 3',
        tags: ['English'],
        viewers: 50
      },
      {
        image: 'https://static-cdn.jtvnw.net/previews-ttv/live_user_ozku-440x248.jpg',
        title: '🔴 Daditos x2!! - EL Magozku, besto maguito en howartion, cual era mi casa? | !dados !tienda',
        avatar: 'https://static-cdn.jtvnw.net/jtv_user_pictures/f4020214-f9ad-4e3c-9577-e5adf2054f29-profile_image-50x50.png',
        streamer: 'Ozku',
        game: 'Hogwarts Legacy',
        tags: ['spanish', 'ClosedCaptions', 'ESP'],
        viewers: 50
      },
      {
        image: 'https://static-cdn.jtvnw.net/previews-ttv/live_user_illojuan-440x248.jpg',
        title: '🪓 HOY NOS TOCA TRABAJAR (no se lo cree ni tu prima la coja) - Sons of the Forest ft. Andrés #2',
        avatar: 'https://static-cdn.jtvnw.net/jtv_user_pictures/37454f0e-581b-42ba-b95b-416f3113fd37-profile_image-50x50.png',
        streamer: 'IlloJuan',
        game: 'Sons of the Forest',
        tags: ['DropsActivados', 'Español'],
        viewers: 50
      },
      {
        image: 'https://static-cdn.jtvnw.net/previews-ttv/live_user_fextralife-440x248.jpg',
        title: '!GIVEAWAY !MAP THE END??? Hogwarts Hard Mode with Yuria',
        avatar: 'https://static-cdn.jtvnw.net/jtv_user_pictures/a28b0d37-81d0-415a-8ed8-1a1f998ea26d-profile_image-50x50.png',
        streamer: 'Fextralife',
        game: 'Hogwarts Legacy',
        tags: ['English', 'hardmode'],
        viewers: 50
      },
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
} as Meta<LayoutWithSideMenuComponent>;

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

              <div class="px-6">

                  <div class="mt-6 mb-3">
                      <app-game-details-card
                        [image]="game.image"
                        [title]="game.title"
                        [viewers]="game.viewers"
                        [followers]="game.followers"
                        [tags]="game.tags"
                      />
                  </div>

                  <div class="border-b border-gray-700">
                      <nav class="-mb-px flex space-x-8 overflow-x-auto" aria-label="Tabs">

                        <a href="#" class="border-indigo-400 text-indigo-400 whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium" aria-current="page">Chaînes live</a>
                        <a href="#" class="border-transparent text-gray-400 hover:border-gray-400 hover:text-gray-300 whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium">A venir</a>
                        <a href="#" class="border-transparent text-gray-400 hover:border-gray-400 hover:text-gray-300 whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium">Vidéos</a>
                        <a href="#" class="border-transparent text-gray-400 hover:border-gray-400 hover:text-gray-300 whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium">Clips</a>
                      </nav>
                  </div>

                  <h3 class="text-white text-xl font-medium py-4">Les chaînes en <span class="text-indigo-400">Français</span></h3>

                  <div role="list" class="grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5">
                      <app-stream-card *ngFor="let stream of streamsInFrench" [image]="stream.image" [title]="stream.title" [avatar]="stream.avatar" [streamer]="stream.streamer" [game]="stream.game" [tags]="stream.tags" [viewers]="stream.viewers" />
                  </div>

                  <h3 class="text-white text-xl font-medium py-4">Toutes les chaînes</h3>

                  <div role="list" class="grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5">
                      <app-stream-card *ngFor="let stream of streams" [image]="stream.image" [title]="stream.title" [avatar]="stream.avatar" [streamer]="stream.streamer" [game]="stream.game" [tags]="stream.tags" [viewers]="stream.viewers" />
                  </div>

              </div>
          </div>

      </app-layout-with-side-menu>
  `
});

export const Streams = exampleTemplate.bind({});
Streams.args = { title: 'Angular Twitch Clone' };
