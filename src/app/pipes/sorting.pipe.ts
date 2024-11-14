import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../model/product';

@Pipe({
  name: 'sorting',
  standalone: true
})
export class SortingPipe implements PipeTransform {

  transform(products: IProduct[], ascending: boolean): IProduct[] {
    return products.sort((a, b) => {
      return ascending ? a.price - b.price : b.price - a.price
    })

  }

}
