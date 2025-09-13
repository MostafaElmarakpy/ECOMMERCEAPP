import { Component, Input, OnChanges } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ICategory } from '../../models/icategory';
import { HighlightCardDirective } from '../../directives/highlight-card.directive';
import { SqurePipe } from '../../pipes/squre.pipe';
import { NationalIdPipe } from '../../pipes/national-id.pipe';
import { pipe } from 'rxjs';
import { Router, RouterLink } from '@angular/router';
import { HomeComponent } from "../home/home.component";

@Component({
  selector: 'app-products',
  // standalone: true,
 
  imports: [
    CommonModule,
    FormsModule,
    HighlightCardDirective,
    SqurePipe,
    NationalIdPipe,
    
],
  
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnChanges {

  categorys :ICategory[] = [
      {id:1, name:"Laptops"},
      {id:2, name:"Desktops"},
      {id:3, name:"Monitors"},
      {id:4, name:"Accessories"}
  ];
  
  totelOfProducts:number=0;
  num:number=5;
  nationalId:number=199922923122;

  @Input() recevedCatFromOrder: number = 0;

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

  constructor(private readonly router: Router) {
    this.products;

    this.categorys ;
    };

  ngOnChanges() { 
    this.filterByCategory();
  }

  buyProducts(count :string, quantity:number){
    
      this.totelOfProducts += +count * quantity;
    
  }

  filterByCategory(){
    if(this.recevedCatFromOrder == 0){
      return this.products;
    }else{
      return this.products.filter(p => p.category_id == this.recevedCatFromOrder);
    }
  }
  addToCart(product: IProduct) {
    console.log(`Product ${product.name} added to cart!`);
    // Here you can add logic to actually add the product to a shopping cart
  }
  goToDetails(productId: number) {
    this.router.navigate(['/details', productId]);
  }

  updateProduct() {
    this.products ; 
    console.log(`Update product clicked!`);
    // Here you can add logic to open a modal or navigate to an update form
  }



    

}
