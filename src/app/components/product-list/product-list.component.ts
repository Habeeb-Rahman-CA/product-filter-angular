import { Component, signal } from '@angular/core';
import { IProduct } from '../../model/product';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SortingPipe } from '../../pipes/sorting.pipe';
import { single } from 'rxjs';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [FormsModule, CommonModule, SortingPipe],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  searchItem: string = ''
  selectedCategory: string = ''
  minPrice: number | null = null
  maxPrice: number | null = null
  ascending: boolean = false

  sortbtn = signal('Sort: Price')

  categories = ["Vegetables", "Fruits", "Dairy"]

  products: IProduct[] = [
    { name: 'Tomato', price: 30, category: "Vegetables" },
    { name: 'Mango', price: 130, category: "Fruits" },
    { name: 'Milk', price: 70, category: "Dairy" },
    { name: 'Onion', price: 20, category: "Vegetables" },
    { name: 'Apples', price: 150, category: "Fruits" },
    { name: 'Egg', price: 7, category: "Dairy" },
    { name: 'Carrot', price: 25, category: "Vegetables" },
    { name: 'Banana', price: 50, category: "Fruits" },
    { name: 'Cheese', price: 120, category: "Dairy" },
    { name: 'Potato', price: 15, category: "Vegetables" },
    { name: 'Grapes', price: 200, category: "Fruits" },
    { name: 'Butter', price: 100, category: "Dairy" },
    { name: 'Cucumber', price: 18, category: "Vegetables" },
    { name: 'Pineapple', price: 90, category: "Fruits" },
    { name: 'Yogurt', price: 40, category: "Dairy" },
    { name: 'Spinach', price: 22, category: "Vegetables" },
    { name: 'Orange', price: 60, category: "Fruits" },
    { name: 'Cream', price: 85, category: "Dairy" },
    { name: 'Lettuce', price: 28, category: "Vegetables" },
    { name: 'Peach', price: 110, category: "Fruits" },
    { name: 'Paneer', price: 150, category: "Dairy" },
    { name: 'Broccoli', price: 45, category: "Vegetables" },
    { name: 'Watermelon', price: 80, category: "Fruits" },
    { name: 'Ice Cream', price: 140, category: "Dairy" },
    { name: 'Garlic', price: 35, category: "Vegetables" },
    { name: 'Strawberry', price: 160, category: "Fruits" },
    { name: 'Ghee', price: 300, category: "Dairy" },
    { name: 'Pumpkin', price: 25, category: "Vegetables" },
    { name: 'Blueberry', price: 180, category: "Fruits" },
    { name: 'Custard', price: 50, category: "Dairy" },
    { name: 'Beetroot', price: 32, category: "Vegetables" },
    { name: 'Pear', price: 90, category: "Fruits" },
    { name: 'Whey', price: 200, category: "Dairy" },
    { name: 'Radish', price: 15, category: "Vegetables" },
    { name: 'Papaya', price: 70, category: "Fruits" },
    { name: 'Condensed Milk', price: 45, category: "Dairy" },
    { name: 'Peas', price: 40, category: "Vegetables" },
    { name: 'Kiwi', price: 95, category: "Fruits" },
    { name: 'Sour Cream', price: 55, category: "Dairy" },
    { name: 'Zucchini', price: 30, category: "Vegetables" },
    { name: 'Blackberry', price: 200, category: "Fruits" },
    { name: 'Lassi', price: 35, category: "Dairy" },
    { name: 'Bell Pepper', price: 40, category: "Vegetables" },
    { name: 'Guava', price: 75, category: "Fruits" },
    { name: 'Malted Milk', price: 65, category: "Dairy" },
    { name: 'Celery', price: 30, category: "Vegetables" },
    { name: 'Plum', price: 120, category: "Fruits" },
    { name: 'Cottage Cheese', price: 180, category: "Dairy" },
  ]


  filterSearch(products: IProduct[]) {
    return products.filter(product => product.name.includes(this.searchItem))
  }

  categoryByProduct(products: IProduct[]) {
    if (this.selectedCategory == '') {
      return products
    } else {
      return products.filter(product => product.category == this.selectedCategory)
    }
  }

  priceRange(products: IProduct[]) {
    return products.filter(product => {
      const min = this.minPrice === null || product.price >= this.minPrice
      const max = this.maxPrice === null || product.price <= this.maxPrice
      return min && max
    })
  }

  getAllFilteredProduct() {
    let filteredProduct = this.products
    filteredProduct = this.filterSearch(filteredProduct)
    filteredProduct = this.categoryByProduct(filteredProduct)
    filteredProduct = this.priceRange(filteredProduct)
    return filteredProduct
  }

  toggleSort() {
    this.ascending = !this.ascending
    if (this.ascending) {
      this.sortbtn.set('Low to High')
    } else {
      this.sortbtn.set('High to Low')
    }
  }

}
