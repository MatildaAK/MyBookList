import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bookformatter',
  standalone: true
})
export class bookformatterPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    return value.replace("https://www.localhost:7271/api/Book","").split("?")[0];
  }

}
