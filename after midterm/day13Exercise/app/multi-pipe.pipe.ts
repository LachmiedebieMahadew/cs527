import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiPipe'
})
export class MultiPipePipe implements PipeTransform {

  transform(value: string, val: number): string {
    return value.repeat(val);
  }

}
