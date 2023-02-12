import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { StreamService } from '../../data-access/stream.service';
import { StreamData } from '../../utils/stream-data';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {

  @Output() before = new EventEmitter<void>();
  @Output() after = new EventEmitter<void>();


  constructor(private route: ActivatedRoute, private streamService: StreamService) {

  }

  beforeData(): void {
    this.before.emit();
  }

  afterData(): void {
    this.after.emit();
  }
}
