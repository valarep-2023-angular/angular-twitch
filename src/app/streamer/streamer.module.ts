import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {StreamerRoutingModule} from './streamer-routing.module';
import {
  StreamPlayerComponent as LoadPlayerStreamComponent
} from './feature/load-player-stream/load-player-stream.component';
import {SharedModule} from "../shared/shared.module";
import { LoadClipByIdComponent } from './feature/load-clip-by-id/load-clip-by-id.component';

@NgModule({
  declarations: [
    LoadPlayerStreamComponent,
    LoadClipByIdComponent
  ],
  imports: [
    CommonModule,
    StreamerRoutingModule,
    SharedModule
  ]
})
export class StreamerModule { }
