import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StreamerRoutingModule } from './streamer-routing.module';
import { StreamPlayerComponent } from './feature/stream-player/stream-player.component';
import {SharedModule} from "../shared/shared.module";
import { SafePipe } from '../shared/utils/pipes/safe/safe.pipe';

@NgModule({
  declarations: [
    StreamPlayerComponent,
    SafePipe
  ],
  imports: [
    CommonModule,
    StreamerRoutingModule,
    SharedModule
  ]
})
export class StreamerModule { }
