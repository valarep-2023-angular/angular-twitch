import {moduleMetadata, Story} from "@storybook/angular";
import {NgHeroiconsModule} from "@dimaslz/ng-heroicons";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MediaObjectComponent} from "../media-object/media-object.component";
import {GameCardComponent} from "../game-card/game-card.component";
import {MainHeaderComponent} from "../headers/main-header/main-header.component";
import {MainNavComponent} from "../navigation/main-nav/main-nav.component";
import {MainNavItemComponent} from "../navigation/main-nav-item/main-nav-item.component";
import {TabsComponent} from "../navigation/tabs/tabs.component";
import {TabComponent} from "../navigation/tab/tab.component";
import {LayoutWithSideMenuComponent} from "../layout-with-side-menu/layout-with-side-menu.component";
import {
  DesktopSideMenuContentComponent
} from "../layout-with-side-menu/desktop-side-menu-content/desktop-side-menu-content.component";
import {
  MobileSideMenuContentComponent
} from "../layout-with-side-menu/mobile-side-menu-content/mobile-side-menu-content.component";
import {SideMenuSubTitleComponent} from "../layout-with-side-menu/side-menu-sub-title/side-menu-sub-title.component";

export default {
  title: 'Screens/Categories',
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
        TabComponent
      ],
      imports: [
        BrowserAnimationsModule,
        NgHeroiconsModule
      ],
    })
  ]
};

const exampleTemplate: Story = (args) => ({
  props: args,
  template: `
      <app-layout-with-side-menu [title]="title">
          <app-desktop-side-menu-content>

          <app-side-menu-sub-title>
              <heart-outline-icon class="mr-2"/>Chaînes suivies
          </app-side-menu-sub-title>

           <app-media-object
            image="https://static-cdn.jtvnw.net/jtv_user_pictures/7e03390b-82d1-44e8-a4b5-c895475b2f43-profile_image-70x70.png"
            title="Lyelz"
            subtitle="Ragnarok Online"
            amount="35"
            />

            <app-media-object
            image="https://static-cdn.jtvnw.net/jtv_user_pictures/f3591dbe4ee3d94b-profile_image-70x70.png"
            title="loltyler1"
            subtitle="League of Legends"
            amount="18,7k"
            />

            <app-media-object
            image="https://static-cdn.jtvnw.net/jtv_user_pictures/417eda85-3794-490e-80d3-4df231522384-profile_image-70x70.png"
            title="diabliohighway_"
            subtitle="Diablo III"
            amount="7"
            />

            <app-media-object
            image="https://static-cdn.jtvnw.net/jtv_user_pictures/4400791a-cace-4ea5-9569-62db385ce1dd-profile_image-70x70.png"
            title="ClaudioMichaux"
            subtitle="Evénements spéciaux"
            amount="1,8k"
            />

            <app-media-object
            image="https://static-cdn.jtvnw.net/jtv_user_pictures/toymchne_-profile_image-d53305f3fc95d420-70x70.png"
            title="Toymchne_"
            subtitle="Guild Wars 2"
            amount="16"
            />

            <app-media-object
            image="https://static-cdn.jtvnw.net/jtv_user_pictures/53191e50-a12d-424f-8806-4b7c9cb0526e-profile_image-70x70.png"
            title="alvarotv23"
            subtitle="Ragnarok Online"
            amount="43"
            />

            <app-media-object
            image="https://static-cdn.jtvnw.net/jtv_user_pictures/d456df98-0b4a-4aed-a01c-96a5f75bfad4-profile_image-70x70.png"
            title="vVanderZ"
            subtitle="Ragnarok Online"
            amount="23"
            />

            <app-media-object
            image="https://static-cdn.jtvnw.net/jtv_user_pictures/e760df9a-224d-481e-905b-bbd86810040a-profile_image-70x70.png"
            title="Engidim"
            subtitle="Ragnarok Online"
            amount="20"
            />

            <app-media-object
            image="https://static-cdn.jtvnw.net/jtv_user_pictures/6affd99a-efe4-4565-878a-befb355df42a-profile_image-70x70.png"
            title="icatas"
            subtitle="Sons of the Forest"
            amount="192"
            />



          <app-side-menu-sub-title>
              <fire-outline-icon class="mr-2 mt-2"/>Chaînes recommandées
          </app-side-menu-sub-title>

           <app-media-object
            image="https://static-cdn.jtvnw.net/jtv_user_pictures/7e03390b-82d1-44e8-a4b5-c895475b2f43-profile_image-70x70.png"
            title="Lyelz"
            subtitle="Ragnarok Online"
            amount="35"
            />

            <app-media-object
            image="https://static-cdn.jtvnw.net/jtv_user_pictures/f3591dbe4ee3d94b-profile_image-70x70.png"
            title="loltyler1"
            subtitle="League of Legends"
            amount="18,7k"
            />

            <app-media-object
            image="https://static-cdn.jtvnw.net/jtv_user_pictures/417eda85-3794-490e-80d3-4df231522384-profile_image-70x70.png"
            title="diabliohighway_"
            subtitle="Diablo III"
            amount="7"
            />

            <app-media-object
            image="https://static-cdn.jtvnw.net/jtv_user_pictures/4400791a-cace-4ea5-9569-62db385ce1dd-profile_image-70x70.png"
            title="ClaudioMichaux"
            subtitle="Evénements spéciaux"
            amount="1,8k"
            />

            <app-media-object
            image="https://static-cdn.jtvnw.net/jtv_user_pictures/toymchne_-profile_image-d53305f3fc95d420-70x70.png"
            title="Toymchne_"
            subtitle="Guild Wars 2"
            amount="16"
            />

            <app-media-object
            image="https://static-cdn.jtvnw.net/jtv_user_pictures/53191e50-a12d-424f-8806-4b7c9cb0526e-profile_image-70x70.png"
            title="alvarotv23"
            subtitle="Ragnarok Online"
            amount="43"
            />

            <app-media-object
            image="https://static-cdn.jtvnw.net/jtv_user_pictures/d456df98-0b4a-4aed-a01c-96a5f75bfad4-profile_image-70x70.png"
            title="vVanderZ"
            subtitle="Ragnarok Online"
            amount="23"
            />

            <app-media-object
            image="https://static-cdn.jtvnw.net/jtv_user_pictures/e760df9a-224d-481e-905b-bbd86810040a-profile_image-70x70.png"
            title="Engidim"
            subtitle="Ragnarok Online"
            amount="20"
            />

            <app-media-object
            image="https://static-cdn.jtvnw.net/jtv_user_pictures/6affd99a-efe4-4565-878a-befb355df42a-profile_image-70x70.png"
            title="icatas"
            subtitle="Sons of the Forest"
            amount="192"
            />

          </app-desktop-side-menu-content>

          <app-mobile-side-menu-content>

          <app-side-menu-sub-title>
              <hand-thumb-up-outline-icon class="mr-2"/>Chaînes recommandées
          </app-side-menu-sub-title>

           <app-media-object
            image="https://static-cdn.jtvnw.net/jtv_user_pictures/7e03390b-82d1-44e8-a4b5-c895475b2f43-profile_image-70x70.png"
            title="Lyelz"
            subtitle="Ragnarok Online"
            amount="35"
            />

            <app-media-object
            image="https://static-cdn.jtvnw.net/jtv_user_pictures/f3591dbe4ee3d94b-profile_image-70x70.png"
            title="loltyler1"
            subtitle="League of Legends"
            amount="18,7k"
            />

            <app-media-object
            image="https://static-cdn.jtvnw.net/jtv_user_pictures/417eda85-3794-490e-80d3-4df231522384-profile_image-70x70.png"
            title="diabliohighway_"
            subtitle="Diablo III"
            amount="7"
            />

            <app-media-object
            image="https://static-cdn.jtvnw.net/jtv_user_pictures/4400791a-cace-4ea5-9569-62db385ce1dd-profile_image-70x70.png"
            title="ClaudioMichaux"
            subtitle="Evénements spéciaux"
            amount="1,8k"
            />

            <app-media-object
            image="https://static-cdn.jtvnw.net/jtv_user_pictures/toymchne_-profile_image-d53305f3fc95d420-70x70.png"
            title="Toymchne_"
            subtitle="Guild Wars 2"
            amount="16"
            />

            <app-media-object
            image="https://static-cdn.jtvnw.net/jtv_user_pictures/53191e50-a12d-424f-8806-4b7c9cb0526e-profile_image-70x70.png"
            title="alvarotv23"
            subtitle="Ragnarok Online"
            amount="43"
            />

            <app-media-object
            image="https://static-cdn.jtvnw.net/jtv_user_pictures/d456df98-0b4a-4aed-a01c-96a5f75bfad4-profile_image-70x70.png"
            title="vVanderZ"
            subtitle="Ragnarok Online"
            amount="23"
            />

            <app-media-object
            image="https://static-cdn.jtvnw.net/jtv_user_pictures/e760df9a-224d-481e-905b-bbd86810040a-profile_image-70x70.png"
            title="Engidim"
            subtitle="Ragnarok Online"
            amount="20"
            />

            <app-media-object
            image="https://static-cdn.jtvnw.net/jtv_user_pictures/6affd99a-efe4-4565-878a-befb355df42a-profile_image-70x70.png"
            title="icatas"
            subtitle="Sons of the Forest"
            amount="192"
            />

            <app-side-menu-sub-title>
              <hand-thumb-up-outline-icon class="mr-2"/>
              <span>Chaînes recommandées</span>
            </app-side-menu-sub-title>

          </app-mobile-side-menu-content>

          <!-- Any content-->
          <div class="bg-gray-900">

              <app-main-header>
                  <app-main-nav>
                      <app-main-nav-item text="Tout" [isCurrent]="true" link="#"/>
                      <app-main-nav-item text="Jeux" [isCurrent]="false" link="#" />
                      <app-main-nav-item text="IRL" [isCurrent]="false" link="#" />
                      <app-main-nav-item text="Musique" [isCurrent]="false" link="#" />
                      <app-main-nav-item text="Esports" [isCurrent]="false" link="#" />
                      <app-main-nav-item text="Créatif" [isCurrent]="false" link="#" />
                  </app-main-nav>
              </app-main-header>

              <div class="px-6">

                  <app-tabs></app-tabs>

                  <div role="list" class="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8">

                      <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" title="Ragnarok Online" image="https://static-cdn.jtvnw.net/ttv-boxart/15229_IGDB-285x380.jpg"></app-game-card>
                      <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" title="League of Legends" image="https://static-cdn.jtvnw.net/ttv-boxart/21779-285x380.jpg"></app-game-card>
                      <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" title="Just Chatting" image="https://static-cdn.jtvnw.net/ttv-boxart/509658-285x380.jpg"></app-game-card>
                      <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" title="DOTA 2" image="https://static-cdn.jtvnw.net/ttv-boxart/29595-285x380.jpg"></app-game-card>
                      <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" title="Valorant" image="https://static-cdn.jtvnw.net/ttv-boxart/516575-285x380.jpg"></app-game-card>
                      <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" title="Hogwarts Legacy" image="https://static-cdn.jtvnw.net/ttv-boxart/1095275650_IGDB-285x380.jpg"></app-game-card>
                      <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" title="Sons of the Forrest" image="https://static-cdn.jtvnw.net/ttv-boxart/515479_IGDB-285x380.jpg"></app-game-card>
                      <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" title="Counter Strike Global Offensive" image="https://static-cdn.jtvnw.net/ttv-boxart/32399_IGDB-285x380.jpg"></app-game-card>
                      <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" title="Atomic Heart" image="https://static-cdn.jtvnw.net/ttv-boxart/505963_IGDB-285x380.jpg"></app-game-card>
                      <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" title="Diablo III" image="https://static-cdn.jtvnw.net/ttv-boxart/313558_IGDB-285x380.jpg"></app-game-card>
                      <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" title="Team Fight Tactics" image="https://static-cdn.jtvnw.net/ttv-boxart/513143-285x380.jpg"></app-game-card>
                      <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" title="Lost Ark" image="https://static-cdn.jtvnw.net/ttv-boxart/490100-285x380.jpg"></app-game-card>
                      <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" title="Music" image="https://static-cdn.jtvnw.net/ttv-boxart/26936-285x380.jpg"></app-game-card>
                      <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" title="GTA V" image="https://static-cdn.jtvnw.net/ttv-boxart/32982_IGDB-285x380.jpg"></app-game-card>
                      <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" title="World of Warcraft" image="https://static-cdn.jtvnw.net/ttv-boxart/18122-285x380.jpg"></app-game-card>
                      <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" title="Virtual Casino" image="https://static-cdn.jtvnw.net/ttv-boxart/29452_IGDB-285x380.jpg"></app-game-card>
                      <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" title="Diablo II" image="https://static-cdn.jtvnw.net/ttv-boxart/1788326126_IGDB-285x380.jpg"></app-game-card>
                      <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" title="Pools, Hot Tubs & Beach" image="https://static-cdn.jtvnw.net/ttv-boxart/116747788-285x380.jpg"></app-game-card>
                      <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" title="Talk shows & Podcasts" image="https://static-cdn.jtvnw.net/ttv-boxart/417752-285x380.jpg"></app-game-card>
                      <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" title="Minecraft" image="https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-285x380.jpg"></app-game-card>
                      <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" title="Apex" image="https://static-cdn.jtvnw.net/ttv-boxart/511224-285x380.jpg"></app-game-card>
                      <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" title="Albion Online" image="https://static-cdn.jtvnw.net/ttv-boxart/417528_IGDB-285x380.jpg"></app-game-card>
                      <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" title="Tibia" image="https://static-cdn.jtvnw.net/ttv-boxart/19619_IGDB-285x380.jpg"></app-game-card>
                      <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" title="Genshin Impact" image="https://static-cdn.jtvnw.net/ttv-boxart/513181_IGDB-285x380.jpg"></app-game-card>
                      <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" title="Ragnarok Online" image="https://static-cdn.jtvnw.net/ttv-boxart/15229_IGDB-285x380.jpg"></app-game-card>
                      <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" title="League of Legends" image="https://static-cdn.jtvnw.net/ttv-boxart/21779-285x380.jpg"></app-game-card>
                      <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" title="Just Chatting" image="https://static-cdn.jtvnw.net/ttv-boxart/509658-285x380.jpg"></app-game-card>
                      <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" title="DOTA 2" image="https://static-cdn.jtvnw.net/ttv-boxart/29595-285x380.jpg"></app-game-card>
                      <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" title="Valorant" image="https://static-cdn.jtvnw.net/ttv-boxart/516575-285x380.jpg"></app-game-card>
                      <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" title="Hogwarts Legacy" image="https://static-cdn.jtvnw.net/ttv-boxart/1095275650_IGDB-285x380.jpg"></app-game-card>
                      <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" title="Sons of the Forrest" image="https://static-cdn.jtvnw.net/ttv-boxart/515479_IGDB-285x380.jpg"></app-game-card>
                      <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" title="Counter Strike Global Offensive" image="https://static-cdn.jtvnw.net/ttv-boxart/32399_IGDB-285x380.jpg"></app-game-card>
                      <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" title="Atomic Heart" image="https://static-cdn.jtvnw.net/ttv-boxart/505963_IGDB-285x380.jpg"></app-game-card>
                      <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" title="Diablo III" image="https://static-cdn.jtvnw.net/ttv-boxart/313558_IGDB-285x380.jpg"></app-game-card>
                      <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" title="Team Fight Tactics" image="https://static-cdn.jtvnw.net/ttv-boxart/513143-285x380.jpg"></app-game-card>
                      <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" title="Lost Ark" image="https://static-cdn.jtvnw.net/ttv-boxart/490100-285x380.jpg"></app-game-card>
                      <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" title="Music" image="https://static-cdn.jtvnw.net/ttv-boxart/26936-285x380.jpg"></app-game-card>
                      <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" title="GTA V" image="https://static-cdn.jtvnw.net/ttv-boxart/32982_IGDB-285x380.jpg"></app-game-card>
                      <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" title="World of Warcraft" image="https://static-cdn.jtvnw.net/ttv-boxart/18122-285x380.jpg"></app-game-card>
                      <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" title="Virtual Casino" image="https://static-cdn.jtvnw.net/ttv-boxart/29452_IGDB-285x380.jpg"></app-game-card>
                      <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" title="Diablo II" image="https://static-cdn.jtvnw.net/ttv-boxart/1788326126_IGDB-285x380.jpg"></app-game-card>
                      <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" title="Pools, Hot Tubs & Beach" image="https://static-cdn.jtvnw.net/ttv-boxart/116747788-285x380.jpg"></app-game-card>
                      <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" title="Talk shows & Podcasts" image="https://static-cdn.jtvnw.net/ttv-boxart/417752-285x380.jpg"></app-game-card>
                      <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" title="Minecraft" image="https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-285x380.jpg"></app-game-card>
                      <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" title="Apex" image="https://static-cdn.jtvnw.net/ttv-boxart/511224-285x380.jpg"></app-game-card>
                      <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" title="Albion Online" image="https://static-cdn.jtvnw.net/ttv-boxart/417528_IGDB-285x380.jpg"></app-game-card>
                      <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" title="Tibia" image="https://static-cdn.jtvnw.net/ttv-boxart/19619_IGDB-285x380.jpg"></app-game-card>
                      <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" title="Genshin Impact" image="https://static-cdn.jtvnw.net/ttv-boxart/513181_IGDB-285x380.jpg"></app-game-card>
                      <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" title="Ragnarok Online" image="https://static-cdn.jtvnw.net/ttv-boxart/15229_IGDB-285x380.jpg"></app-game-card>
                      <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" title="League of Legends" image="https://static-cdn.jtvnw.net/ttv-boxart/21779-285x380.jpg"></app-game-card>
                      <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" title="Just Chatting" image="https://static-cdn.jtvnw.net/ttv-boxart/509658-285x380.jpg"></app-game-card>
                      <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" title="DOTA 2" image="https://static-cdn.jtvnw.net/ttv-boxart/29595-285x380.jpg"></app-game-card>
                      <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" title="Valorant" image="https://static-cdn.jtvnw.net/ttv-boxart/516575-285x380.jpg"></app-game-card>
                      <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" title="Hogwarts Legacy" image="https://static-cdn.jtvnw.net/ttv-boxart/1095275650_IGDB-285x380.jpg"></app-game-card>
                      <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" title="Sons of the Forrest" image="https://static-cdn.jtvnw.net/ttv-boxart/515479_IGDB-285x380.jpg"></app-game-card>
                      <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" title="Counter Strike Global Offensive" image="https://static-cdn.jtvnw.net/ttv-boxart/32399_IGDB-285x380.jpg"></app-game-card>
                      <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" title="Atomic Heart" image="https://static-cdn.jtvnw.net/ttv-boxart/505963_IGDB-285x380.jpg"></app-game-card>
                      <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" title="Diablo III" image="https://static-cdn.jtvnw.net/ttv-boxart/313558_IGDB-285x380.jpg"></app-game-card>
                      <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" title="Team Fight Tactics" image="https://static-cdn.jtvnw.net/ttv-boxart/513143-285x380.jpg"></app-game-card>
                      <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" title="Lost Ark" image="https://static-cdn.jtvnw.net/ttv-boxart/490100-285x380.jpg"></app-game-card>
                      <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" title="Music" image="https://static-cdn.jtvnw.net/ttv-boxart/26936-285x380.jpg"></app-game-card>
                      <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" title="GTA V" image="https://static-cdn.jtvnw.net/ttv-boxart/32982_IGDB-285x380.jpg"></app-game-card>
                      <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" title="World of Warcraft" image="https://static-cdn.jtvnw.net/ttv-boxart/18122-285x380.jpg"></app-game-card>
                      <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" title="Virtual Casino" image="https://static-cdn.jtvnw.net/ttv-boxart/29452_IGDB-285x380.jpg"></app-game-card>
                      <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" title="Diablo II" image="https://static-cdn.jtvnw.net/ttv-boxart/1788326126_IGDB-285x380.jpg"></app-game-card>
                      <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" title="Pools, Hot Tubs & Beach" image="https://static-cdn.jtvnw.net/ttv-boxart/116747788-285x380.jpg"></app-game-card>
                      <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" title="Talk shows & Podcasts" image="https://static-cdn.jtvnw.net/ttv-boxart/417752-285x380.jpg"></app-game-card>
                      <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" title="Minecraft" image="https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-285x380.jpg"></app-game-card>
                      <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" title="Apex" image="https://static-cdn.jtvnw.net/ttv-boxart/511224-285x380.jpg"></app-game-card>
                      <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" title="Albion Online" image="https://static-cdn.jtvnw.net/ttv-boxart/417528_IGDB-285x380.jpg"></app-game-card>
                      <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" title="Tibia" image="https://static-cdn.jtvnw.net/ttv-boxart/19619_IGDB-285x380.jpg"></app-game-card>
                      <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" title="Genshin Impact" image="https://static-cdn.jtvnw.net/ttv-boxart/513181_IGDB-285x380.jpg"></app-game-card>
                      <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" title="Ragnarok Online" image="https://static-cdn.jtvnw.net/ttv-boxart/15229_IGDB-285x380.jpg"></app-game-card>
                      <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" title="League of Legends" image="https://static-cdn.jtvnw.net/ttv-boxart/21779-285x380.jpg"></app-game-card>
                      <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" title="Just Chatting" image="https://static-cdn.jtvnw.net/ttv-boxart/509658-285x380.jpg"></app-game-card>
                      <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" title="DOTA 2" image="https://static-cdn.jtvnw.net/ttv-boxart/29595-285x380.jpg"></app-game-card>
                      <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" title="Valorant" image="https://static-cdn.jtvnw.net/ttv-boxart/516575-285x380.jpg"></app-game-card>
                      <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" title="Hogwarts Legacy" image="https://static-cdn.jtvnw.net/ttv-boxart/1095275650_IGDB-285x380.jpg"></app-game-card>
                      <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" title="Sons of the Forrest" image="https://static-cdn.jtvnw.net/ttv-boxart/515479_IGDB-285x380.jpg"></app-game-card>
                      <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" title="Counter Strike Global Offensive" image="https://static-cdn.jtvnw.net/ttv-boxart/32399_IGDB-285x380.jpg"></app-game-card>
                      <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" title="Atomic Heart" image="https://static-cdn.jtvnw.net/ttv-boxart/505963_IGDB-285x380.jpg"></app-game-card>
                      <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" title="Diablo III" image="https://static-cdn.jtvnw.net/ttv-boxart/313558_IGDB-285x380.jpg"></app-game-card>
                      <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" title="Team Fight Tactics" image="https://static-cdn.jtvnw.net/ttv-boxart/513143-285x380.jpg"></app-game-card>
                      <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" title="Lost Ark" image="https://static-cdn.jtvnw.net/ttv-boxart/490100-285x380.jpg"></app-game-card>
                      <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" title="Music" image="https://static-cdn.jtvnw.net/ttv-boxart/26936-285x380.jpg"></app-game-card>
                      <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" title="GTA V" image="https://static-cdn.jtvnw.net/ttv-boxart/32982_IGDB-285x380.jpg"></app-game-card>
                      <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" title="World of Warcraft" image="https://static-cdn.jtvnw.net/ttv-boxart/18122-285x380.jpg"></app-game-card>
                      <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" title="Virtual Casino" image="https://static-cdn.jtvnw.net/ttv-boxart/29452_IGDB-285x380.jpg"></app-game-card>
                      <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" title="Diablo II" image="https://static-cdn.jtvnw.net/ttv-boxart/1788326126_IGDB-285x380.jpg"></app-game-card>
                      <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" title="Pools, Hot Tubs & Beach" image="https://static-cdn.jtvnw.net/ttv-boxart/116747788-285x380.jpg"></app-game-card>
                      <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" title="Talk shows & Podcasts" image="https://static-cdn.jtvnw.net/ttv-boxart/417752-285x380.jpg"></app-game-card>
                      <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" title="Minecraft" image="https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-285x380.jpg"></app-game-card>
                      <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" title="Apex" image="https://static-cdn.jtvnw.net/ttv-boxart/511224-285x380.jpg"></app-game-card>
                      <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" title="Albion Online" image="https://static-cdn.jtvnw.net/ttv-boxart/417528_IGDB-285x380.jpg"></app-game-card>
                      <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" title="Tibia" image="https://static-cdn.jtvnw.net/ttv-boxart/19619_IGDB-285x380.jpg"></app-game-card>
                      <app-game-card [tags]="['tag1', 'tag2']" subTitle="455 spectateurs" title="Genshin Impact" image="https://static-cdn.jtvnw.net/ttv-boxart/513181_IGDB-285x380.jpg"></app-game-card>
                  </div>
              </div>
          </div>

      </app-layout-with-side-menu>
  `
});

export const FullExample = exampleTemplate.bind({});
FullExample.args = { title: 'Angular Twitch Clone' };
