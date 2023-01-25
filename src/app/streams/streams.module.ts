import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StreamsRoutingModule } from './streams-routing.module';
import { GetStreamsByGameIdComponent } from './feature/get-streams-by-game-id/get-streams-by-game-id.component';
import { ResizePipe } from './feature/get-streams-by-game-id/change-width-height.pipe';


@NgModule({
  declarations: [
    GetStreamsByGameIdComponent,
    ResizePipe
  ],
  imports: [
    CommonModule,
    StreamsRoutingModule
  ],
  providers: [ResizePipe]
})
export class StreamsModule { }
