import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customTitle',
  standalone: true
})
export class CustomTitlePipe implements PipeTransform {

  transform(text: string, length: number): unknown {
    return text.split(' ').map((word)=> {
      if (word.length > length) {
        return `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`
      }
      return word
    }).join(' ')
  }

}
