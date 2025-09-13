import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ɵEmptyOutletComponent } from "../../../../node_modules/@angular/router/router_module.d-Bx9ArA6K";

@Component({
  selector: 'app-footer',
  imports: [ɵEmptyOutletComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  // create input property to receive data from parent
  @Input() recevedDataFromApp:string="";

  // create event emitter to send data from child to parent
  @Output() sendDataToParent = new EventEmitter<string>();
  sendData() {
    const data = "Data from Footer Component";
    this.sendDataToParent.emit(data);
  }
}
