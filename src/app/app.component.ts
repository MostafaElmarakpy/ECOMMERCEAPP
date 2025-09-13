import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,// to use ngIf and ngFor
    HeaderComponent,
    FooterComponent,
    RouterOutlet
    
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ECOMMERCEAPP';
  
  getDataFromC:string="";

 recevedDataFromFooter:string="";


}