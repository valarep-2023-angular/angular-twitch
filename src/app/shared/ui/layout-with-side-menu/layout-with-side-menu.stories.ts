import {LayoutWithSideMenuComponent} from "./layout-with-side-menu.component";
import {moduleMetadata, Story} from "@storybook/angular";
import {NgHeroiconsModule} from "@dimaslz/ng-heroicons";
import {DesktopSideMenuContentComponent} from "./desktop-side-menu-content/desktop-side-menu-content.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MobileSideMenuContentComponent} from "./mobile-side-menu-content/mobile-side-menu-content.component";
import {SideMenuSubTitleComponent} from "./side-menu-sub-title/side-menu-sub-title.component";
import {MediaObjectComponent} from "../media-object/media-object.component";
import {GameCardComponent} from "../game-card/game-card.component";

export default {
  title: 'Layouts/With side menu',
  component: LayoutWithSideMenuComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        DesktopSideMenuContentComponent,
        MobileSideMenuContentComponent,
        SideMenuSubTitleComponent,
        MediaObjectComponent,
        GameCardComponent
      ],
      imports: [
        BrowserAnimationsModule,
        NgHeroiconsModule
      ],
    })
  ]
};

const baseTemplate: Story = (args) => ({
  props: args,
  template: `
    <app-layout-with-side-menu [title]="title">
        <app-desktop-side-menu-content>
            <!-- Any content-->
            <div class="px-4 text-white">
              <ul>
                  <li>Desktop side menu content</li>
                  <li>Desktop side menu content</li>
                  <li>Desktop side menu content</li>
                  <li>Desktop side menu content</li>
                  <li>Desktop side menu content</li>
                  <li>Desktop side menu content</li>
                  <li>Desktop side menu content</li>
                  <li>Desktop side menu content</li>
                  <li>Desktop side menu content</li>
                  <li>Desktop side menu content</li>
                  <li>Desktop side menu content</li>
              </ul>
            </div>
        </app-desktop-side-menu-content>
        <app-mobile-side-menu-content>
            <!-- Any content-->
            <div class="px-4 text-white">
              <ul>
                  <li>Mobile side menu content</li>
                  <li>Mobile side menu content</li>
                  <li>Mobile side menu content</li>
                  <li>Mobile side menu content</li>
                  <li>Mobile side menu content</li>
                  <li>Mobile side menu content</li>
                  <li>Mobile side menu content</li>
                  <li>Mobile side menu content</li>
                  <li>Mobile side menu content</li>
                  <li>Mobile side menu content</li>
                  <li>Mobile side menu content</li>
              </ul>
            </div>
        </app-mobile-side-menu-content>

        <!-- Any content-->
        <div class="p-4">
          <p>Main content</p>
        </div>
    </app-layout-with-side-menu>
  `
});

export const Basic = baseTemplate.bind({});
Basic.args = { title: 'Title' };

const exampleTemplate: Story = (args) => ({
  props: args,
  template: `
    <app-layout-with-side-menu [title]="title">
        <app-desktop-side-menu-content>

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
            <hand-thumb-up-outline-icon class="mr-2"/>Chaînes recommandées
          </app-side-menu-sub-title>

        </app-mobile-side-menu-content>

        <!-- Any content-->
        <div class="bg-gray-900 py-3">
          <div class="px-6">

            <h2 class="text-2xl font-bold tracking-tight text-white sm:text-4xl">Parcourir</h2>

            <div role="list" class="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8">

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
