import { Component } from '@angular/core';
import { IProduct } from '../../model/product';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SortingPipe } from '../../pipes/sorting.pipe';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [FormsModule, CommonModule, SortingPipe],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  searchItem : string = ''
  ascending: boolean = false

  products: IProduct[] = [
    { name: 'Tomato', price: 30, category: "Vegetables" },
    { name: 'Mango', price: 130, category: "Fruits" },
    { name: 'Milk', price: 70, category: "Dairy" },
    { name: 'Onion', price: 20, category: "Vegetables" },
    { name: 'Apples', price: 150, category: "Fruits" },
    { name: 'Egg', price: 7, category: "Dairy" }
  ]

  filterProduct(){
   return this.products.filter(product => product.name.includes(this.searchItem))
  }

  toggleSort(){
    this.ascending = !this.ascending
  }

}
