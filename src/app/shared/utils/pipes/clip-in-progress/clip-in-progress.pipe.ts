import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Pipe({
  name: 'clipInProgress'
})
export class ClipInProgressPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {
  }

  transform(slug:string): SafeResourceUrl {
    const url = environment.twitch.clipPlayerUrl+slug;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
