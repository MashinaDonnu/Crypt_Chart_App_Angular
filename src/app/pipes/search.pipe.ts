import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(data, str: string): unknown {
    if (!str.trim()) {
      return data
    }
    return data.filter(item => {
      return item.name.toLowerCase().includes(str.toLowerCase()) || item.symbol.toLowerCase().includes(str.toLowerCase())
    })
  }

}
