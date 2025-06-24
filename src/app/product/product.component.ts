import { Component } from '@angular/core';
import { ComingSoonComponent } from '../shared/coming-soon/coming-soon.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ComingSoonComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

}
