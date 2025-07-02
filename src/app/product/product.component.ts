import { Component } from '@angular/core';
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ProductDetailComponent, FooterComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

}
