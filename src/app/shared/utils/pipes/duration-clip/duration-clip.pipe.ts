import {Pipe, PipeTransform} from '@angular/core';
import { format, intervalToDuration } from 'date-fns'


@Pipe({
  name: 'durationClip'
})
export class DurationClipPipe implements PipeTransform {

  constructor() {

  }
  
  transform(duration: number): string {
    
    const time = intervalToDuration({start: 0 , end: duration * 1000})
    const hours = String(time.hours).padStart(2 , "0");
    const minutes = String(time.minutes).padStart(2 , "0");
    const secondes = String(time.seconds).padStart(2 , "0")
    return `${hours}:${minutes}:${secondes}` 
  }

}

