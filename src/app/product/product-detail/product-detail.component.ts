import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Product } from '../../interfaces/product.interface';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';
import { SafePipe } from '../../pipes/safe.pipe';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, SafePipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent {
  productDetail!: Product;
  activeImageIndex: number = 0;
  imageSliderInterval: any;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
  ) {
    this.route.paramMap.subscribe((params) => {
      this.productDetail = this.dataService.products.find(
        (d) => d.id === Number(params.get('id')),
      ) as Product;
      setTimeout(() => {
        this.animateImageSlider();
      }, 500);
    });
  }

  animateImageSlider = () => {
    try {
      this.imageSliderInterval = setInterval(() => {
        if (this.activeImageIndex < this.productDetail.images.length - 1)
          this.activeImageIndex++;
        else this.activeImageIndex = 0;
        gsap.to('.igsc_flex', {
          xPercent: this.activeImageIndex * -100,
          duration: 0.3,
          ease: 'power1.in',
        });
      }, 5000);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
}
