import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'resize'
})
export class Resize implements PipeTransform {
    transform(url: string, width: number, height: number): string {
        url = url.replace("{width}", width.toString());
        url = url.replace("{height}", height.toString());
        return url;
    }
}
