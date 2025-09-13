import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../../models/iproduct';
import { ProductService } from '../../Services/product.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  imports: [   ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  constructor(private _activatedRoute: ActivatedRoute ,
     private _productService: ProductService) { }
  product: IProduct | undefined;
  productId: number = 0;

  /**
   * Gets the id parameter from the route and logs it to the console
   */
  ngOnInit(): void {
    //get the id parameter from the route
    this.productId = Number(this._activatedRoute.snapshot.paramMap.get('id'));
    //get the product by id from the service
    this.product = this._productService.getProductById(this.productId);

    console.log(this.productId);
  }

}
