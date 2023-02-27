import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonComponent} from './ui/button/button.component';
import {LayoutWithSideMenuComponent} from './ui/layout-with-side-menu/layout-with-side-menu.component';
import {NgHeroiconsModule} from "@dimaslz/ng-heroicons";
import {
  DesktopSideMenuContentComponent
} from "./ui/layout-with-side-menu/desktop-side-menu-content/desktop-side-menu-content.component";
import { MobileSideMenuContentComponent } from './ui/layout-with-side-menu/mobile-side-menu-content/mobile-side-menu-content.component';

@NgModule({
  declarations: [
    ButtonComponent,
    LayoutWithSideMenuComponent,
    DesktopSideMenuContentComponent,
    MobileSideMenuContentComponent
  ],
  imports: [
    CommonModule,
    NgHeroiconsModule
  ],
  exports: [
    ButtonComponent,
    LayoutWithSideMenuComponent,
    DesktopSideMenuContentComponent,
    NgHeroiconsModule
  ]
})
export class SharedModule {
}
