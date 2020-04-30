import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textLength'
})
export class TextLength implements PipeTransform {
  transform(value: String) {
    let updatedValue: String = value;
    if (value.length > 60) {
      updatedValue = value.substr(0, 57).concat('...');
    }
    return updatedValue;
  }
}
