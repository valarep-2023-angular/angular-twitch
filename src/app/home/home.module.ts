import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LoadHomeContentComponent } from './feature/load-home-content/load-home-content.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    LoadHomeContentComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
