import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@Pipe({
  name: 'chatUrl'
})
export class ChatUrlPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {
  }

  transform(streamer: string): SafeResourceUrl {

    const url = environment.twitch.chatUrl.replace("[USERNAME]",streamer)

    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}

