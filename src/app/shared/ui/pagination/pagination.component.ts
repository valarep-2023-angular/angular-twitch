import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {

  @Output() before = new EventEmitter<void>();
  @Output() after = new EventEmitter<void>();

  constructor() {

  }

  beforeData(): void {
    this.before.emit();
  }

  afterData(): void {
    this.after.emit();
  }
}
