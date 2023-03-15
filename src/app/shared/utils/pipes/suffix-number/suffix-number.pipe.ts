import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'suffixNumber'
})
export class SuffixNumber implements PipeTransform {

  transform(value: number): string {
    let newValue: number | string = value;
    const suffixes = ["", "k", "M"];
    let suffixNum = 0;

    suffixes.forEach((suffix, index) => {
      const valueToCheck = value / Math.pow(1000, index + 1);
      if (valueToCheck >= 1) {
        suffixNum = index + 1;
      }
    });

    newValue = (value / Math.pow(1000, suffixNum)).toFixed(1);
    if (newValue.toString().indexOf('.0') > -1) {
      newValue = newValue.toString().replace('.0', '');
    }

    return newValue.toString().replace(".", ",") + " " + suffixes[suffixNum];
  }
}
