import {Component, Input} from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-layout-with-side-menu',
  templateUrl: './layout-with-side-menu.component.html',
  animations: [
    trigger('opacityLinear', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms linear', style({  opacity: 1 }))
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('300ms linear', style({ opacity: 0 }))
      ])
    ]),
    trigger('translateX', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('300ms ease-in-out', style({  transform: 'translateX(0)' }))
      ]),
      transition(':leave', [
        style({ transform: 'translateX(0)' }),
        animate('300ms ease-in-out', style({ transform: 'translateX(-100%)' }))
      ])
    ]),
    trigger('opacityInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-in-out', style({  opacity: 1 }))
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('300ms ease-in-out', style({ opacity: 0 }))
      ])
    ]),
    trigger('opacityScale', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(.95)' }),
        animate('100ms ease-out', style({  opacity: 1, transform: 'scale(1)' }))
      ]),
      transition(':leave', [
        style({ opacity: 1, transform: 'scale(1)' }),
        animate('75ms ease-in', style({ opacity: 0, transform: 'scale(.95)' }))
      ])
    ])
  ]
})
export class LayoutWithSideMenuComponent {

  @Input()
  title!: string;

  isOffCanvasMenu = false;
  isOffCanvasMenuDialog = false;

  toggleOffCanvasMenu(){
    this.isOffCanvasMenu = !this.isOffCanvasMenu;

    if (this.isOffCanvasMenuDialog){
      setTimeout(() => {
        this.isOffCanvasMenuDialog = !this.isOffCanvasMenuDialog;
      },400)
    } else {
      this.isOffCanvasMenuDialog = !this.isOffCanvasMenuDialog;
    }
  }
}



