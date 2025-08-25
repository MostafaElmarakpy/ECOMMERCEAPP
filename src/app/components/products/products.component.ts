import { Component } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ICategory } from '../../models/icategory';

@Component({
  selector: 'app-products',
  // standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  categorys :ICategory[] = [
      {id:1, name:"Laptops"},
      {id:2, name:"Desktops"},
      {id:3, name:"Monitors"},
      {id:4, name:"Accessories"}
  ];
  selectedCategory: number = 0;
  totelOfProducts:number=0;
  products :IProduct[] = 
  [

    {
      id:1,
      name:"Dell ",
      price:100,
      quantity:10,
      description:"laptop is a portable computer that combines the components, inputs, outputs, and capabilities of a desktop computer, including the display screen, speakers, keyboard, and battery into a single unit. ",
      category_id:1,
      imgUrl:"https://via.placeholder.com/150"
    },
    {
      id:2,
      name:"HP ",
      price:200,
      quantity:20,
      description:"Laptop is a portable computer that combines the components, inputs, outputs, and capabilities of a desktop computer, including the display screen, speakers, keyboard, and battery into a single unit. ",
      category_id:1,
      imgUrl:"https://via.placeholder.com/150"
    },
    {
      id:3,
      name:"Lenovo ",
      price:300,
      quantity:30,
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptates.",
      category_id:1,
      imgUrl:"https://via.placeholder.com/150"
    },
    {
      id:4,
      name:"Asus ",
      price:400,
      quantity:40,
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptates.",
      category_id:2,
      imgUrl:"https://via.placeholder.com/150"
    },
    {
      id:5,
      name:"Acer ",
      price:500,
      quantity:50,
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptates.",
      category_id:3,
      imgUrl:"https://via.placeholder.com/150"
    }

  ];

  constructor() {
    this.products;

    this.categorys ;
    };


  buyProducts(count :string, quantity:number){
    
      this.totelOfProducts += +count * quantity;
    
  }


    

}
