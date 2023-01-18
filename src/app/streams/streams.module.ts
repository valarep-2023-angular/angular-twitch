import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StreamsRoutingModule } from './streams-routing.module';
import { GetStreamsByGameIdComponent } from './feature/get-streams-by-game-id/get-streams-by-game-id.component';


@NgModule({
  declarations: [
    GetStreamsByGameIdComponent,
  ],
  imports: [
    CommonModule,
    StreamsRoutingModule
  ]
})
export class StreamsModule { }
