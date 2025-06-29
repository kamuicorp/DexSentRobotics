import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { BlogComponent } from './blog/blog.component';
import { ProductHomeComponent } from './product/product-home/product-home.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
  {
    path: 'products',
    component: ProductComponent,
    children: [
      {
        path: '',
        component: ProductHomeComponent
      },
      {
        path: 'detail/:id',
        component: ProductDetailComponent
      }
    ]
  },
  {
    path: 'blogs',
    component: BlogComponent
  }
];
