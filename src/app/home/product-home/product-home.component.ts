import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-home.component.html',
  styleUrl: './product-home.component.scss',
})
export class ProductHomeComponent {
  constructor(public dataService: DataService, private router: Router){}

  onRoute = (productId: number) => {
    try {
      this.router.navigate([`/product/${productId}`])
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
