import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StreamsRoutingModule } from './streams-routing.module';
import { GetStreamsByGameIdComponent } from './feature/get-streams-by-game-id/get-streams-by-game-id.component';
import { ResizePipe } from './feature/get-streams-by-game-id/change-width-height.pipe';
import { StreamCardComponent } from './ui/stream-card/stream-card.component';
import { PaginationComponent } from './ui/pagination/pagination.component';


@NgModule({
  declarations: [
    GetStreamsByGameIdComponent,
    ResizePipe,
    StreamCardComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    StreamsRoutingModule
  ],
  providers: [ResizePipe]
})
export class StreamsModule { }
