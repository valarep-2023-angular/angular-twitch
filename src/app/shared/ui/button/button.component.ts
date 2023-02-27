import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  /**
   * The text to display on the button
   */
  @Input()
  text!: string;

  /**
   * The event that is emitted when the button is clicked
   */
  @Output()
  onClick = new EventEmitter();
}
