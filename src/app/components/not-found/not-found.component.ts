import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-not-found',
  imports: [],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {

  @Input() errorMessage: string = 'The page you are looking for does not exist.';
}
