import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-media-object',
  templateUrl: './media-object.component.html',
  styleUrls: ['./media-object.component.scss']
})
export class MediaObjectComponent {
  @Input()
  image!: string;

  @Input()
  title!: string;

  @Input()
  subtitle!: string;

  @Input()
  amount!: string;
}
