import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StreamerRoutingModule } from './streamer-routing.module';
import { StreamPlayerComponent as LoadPlayerStreamComponent } from './feature/load-player-stream/load-player-stream.component';
import {SharedModule} from "../shared/shared.module";
import { SafePipe } from '../shared/utils/pipes/safe/safe.pipe';

@NgModule({
  declarations: [
    LoadPlayerStreamComponent,
    SafePipe
  ],
  imports: [
    CommonModule,
    StreamerRoutingModule,
    SharedModule
  ]
})
export class StreamerModule { }
