import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonComponent} from './ui/button/button.component';
import {LayoutWithSideMenuComponent} from './ui/layout-with-side-menu/layout-with-side-menu.component';
import {NgHeroiconsModule} from "@dimaslz/ng-heroicons";
import {
  DesktopSideMenuContentComponent
} from "./ui/layout-with-side-menu/desktop-side-menu-content/desktop-side-menu-content.component";
import { MobileSideMenuContentComponent } from './ui/layout-with-side-menu/mobile-side-menu-content/mobile-side-menu-content.component';
import { SideMenuSubTitleComponent } from './ui/layout-with-side-menu/side-menu-sub-title/side-menu-sub-title.component';
import { MediaObjectComponent } from './ui/media-object/media-object.component';
import { GameCardComponent } from './ui/game-card/game-card.component';
import { MainHeaderComponent } from './ui/headers/main-header/main-header.component';
import { MainNavComponent } from './ui/navigation/main-nav/main-nav.component';
import { MainNavItemComponent } from './ui/navigation/main-nav-item/main-nav-item.component';
import { TabsComponent } from './ui/navigation/tabs/tabs.component';
import { TabComponent } from './ui/navigation/tab/tab.component';
import { StreamCardComponent } from './ui/stream-card/stream-card.component';

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
    TabComponent,
    StreamCardComponent
  ],
  imports: [
    CommonModule,
    NgHeroiconsModule
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
    TabComponent,
    StreamCardComponent
  ]
})
export class SharedModule {
}
