import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonComponent} from './ui/button/button.component';
import {LayoutWithSideMenuComponent} from './ui/layout-with-side-menu/layout-with-side-menu.component';
import {NgHeroiconsModule} from "@dimaslz/ng-heroicons";
import {
  DesktopSideMenuContentComponent
} from "./ui/layout-with-side-menu/desktop-side-menu-content/desktop-side-menu-content.component";
import {
  MobileSideMenuContentComponent
} from './ui/layout-with-side-menu/mobile-side-menu-content/mobile-side-menu-content.component';
import {SideMenuSubTitleComponent} from './ui/layout-with-side-menu/side-menu-sub-title/side-menu-sub-title.component';
import {MediaObjectComponent} from './ui/media-object/media-object.component';
import {GameCardComponent} from './ui/game-card/game-card.component';
import {MainHeaderComponent} from './ui/headers/main-header/main-header.component';
import {MainNavComponent} from './ui/navigation/main-nav/main-nav.component';
import {MainNavItemComponent} from './ui/navigation/main-nav-item/main-nav-item.component';
import {TabsComponent} from './ui/navigation/tabs/tabs.component';
import {StreamCardComponent} from './ui/stream-card/stream-card.component';
import {GameDetailsCardComponent} from './ui/game-details-card/game-details-card.component';
import {TagComponent} from './ui/tag/tag.component';
import {VideoCardComponent} from './ui/video-card/video-card.component';
import {ClipCardComponent} from './ui/clip-card/clip-card.component';
import {RouterModule} from "@angular/router";
import {StreamsCarouselComponent} from './ui/streams-carousel/streams-carousel.component';
import {Resize} from "./utils/pipes/resize/resize.pipe";
import {PaginationComponent} from "./ui/pagination/pagination.component";
import { ChatRoomComponent } from './ui/chat-room/chat-room.component';
import { CreateAtDatePipe } from './utils/pipes/created-at-date/created-at-date.pipe';
import { DurationClipPipe } from './utils/pipes/duration-clip/duration-clip.pipe';
import {VideoPlayerComponent} from './ui/video-player/video-player.component';
import {SafePipe} from './utils/pipes/safe/safe.pipe';
import {SuffixNumber} from './utils/pipes/suffix-number/suffix-number.pipe';
import {ChatUrlPipe} from "./utils/pipes/chat-url/chat-url.pipe";

@NgModule({
  declarations: [
    ButtonComponent,
    LayoutWithSideMenuComponent,
    DesktopSideMenuContentComponent,
    MobileSideMenuContentComponent,
    SideMenuSubTitleComponent,
    MediaObjectComponent,
    GameCardComponent,
    MainHeaderComponent,
    MainNavComponent,
    MainNavItemComponent,
    TabsComponent,
    StreamCardComponent,
    GameDetailsCardComponent,
    TagComponent,
    VideoCardComponent,
    ClipCardComponent,
    StreamsCarouselComponent,
    ChatRoomComponent,
    PaginationComponent,
    VideoPlayerComponent,
    Resize,
    SafePipe,
    SuffixNumber,
    CreateAtDatePipe,
    DurationClipPipe,
    ChatUrlPipe
  ],
  imports: [
    RouterModule,
    CommonModule,
    NgHeroiconsModule,
  ],
  exports: [
    ButtonComponent,
    LayoutWithSideMenuComponent,
    DesktopSideMenuContentComponent,
    MobileSideMenuContentComponent,
    NgHeroiconsModule,
    SideMenuSubTitleComponent,
    MediaObjectComponent,
    GameCardComponent,
    MainHeaderComponent,
    MainNavComponent,
    MainNavItemComponent,
    TabsComponent,
    StreamCardComponent,
    GameDetailsCardComponent,
    TagComponent,
    VideoCardComponent,
    ClipCardComponent,
    StreamsCarouselComponent,
    PaginationComponent,
    CreateAtDatePipe,
    DurationClipPipe,
    VideoPlayerComponent,
    Resize,
    SafePipe,
    SuffixNumber,
    ChatUrlPipe
  ]
})
export class SharedModule {
}
