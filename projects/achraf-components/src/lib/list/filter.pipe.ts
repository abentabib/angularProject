import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  filteredArray = [];
  transform(items: any, searchText: string): any {
    this.filteredArray = [];
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    for (let i = 0; i < items.length; i++) {
      if (items[i].name.toLowerCase().includes(searchText.toLowerCase())) {
        this.filteredArray.push(items[i]);
      }
    }
    return this.filteredArray;
   }
}
