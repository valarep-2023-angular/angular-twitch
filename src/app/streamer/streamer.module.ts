import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StreamerRoutingModule } from './streamer-routing.module';
import { StreamPlayerComponent as LoadPlayerStreamComponent } from './feature/load-player-stream/load-player-stream.component';
import {SharedModule} from "../shared/shared.module";
import { SafePipe } from '../shared/utils/pipes/safe/safe.pipe';
import { SuffixNumber } from '../shared/utils/pipes/suffix-number/suffix-number.pipe';

@NgModule({
  declarations: [
    LoadPlayerStreamComponent,
    SafePipe,
    SuffixNumber
  ],
  imports: [
    CommonModule,
    StreamerRoutingModule,
    SharedModule
  ]
})
export class StreamerModule { }
