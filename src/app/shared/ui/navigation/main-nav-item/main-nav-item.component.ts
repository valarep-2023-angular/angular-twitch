import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-main-nav-item',
  templateUrl: './main-nav-item.component.html',
  styleUrls: ['./main-nav-item.component.scss']
})
export class MainNavItemComponent {
  @Input()
  text!: string;

  @Input()
  link!: string;

  @Input()
  isCurrent!: boolean;
}
