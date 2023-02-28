import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  /**
   * The event that is emitted when the button is clicked
   */
  @Output()
  onClick = new EventEmitter();
}
