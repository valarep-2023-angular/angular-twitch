import {Pipe, PipeTransform} from '@angular/core';
import { formatDistanceToNowStrict } from 'date-fns';
import { fr } from 'date-fns/locale';

@Pipe({
  name: 'createdAtDate'
})
export class CreateAtDatePipe implements PipeTransform {

  constructor() {
  }

  transform(creationDate: string): string {
    return formatDistanceToNowStrict(new Date(creationDate), {locale: fr})
  }

}

