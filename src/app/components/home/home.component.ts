import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { ProductsComponent } from '../products/products.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router) { }

  hme: number = 0;
  showProducts() {
    console.log("Navigating to Products page...");
    this.router.navigate(['/Details']);
  }
}
