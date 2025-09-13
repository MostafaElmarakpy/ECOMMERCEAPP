import { Component } from '@angular/core';
import { ICategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-order',
  imports: [CommonModule, FormsModule ,ProductsComponent],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
//create variable to bind with select element from parent to child
  selectedCategory: number = 0;

  categorys :ICategory[] = [
      {id:1, name:"Laptops"},
      {id:2, name:"Desktops"},
      {id:3, name:"Monitors"},
      {id:4, name:"Accessories"}
  ];
  constructor() { 
    this.categorys ;
  }

}
