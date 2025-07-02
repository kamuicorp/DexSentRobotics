import { Component } from '@angular/core';
import { LanderComponent } from './lander/lander.component';
import { WhyComponent } from './why/why.component';
import { FooterComponent } from '../footer/footer.component';
import { AboutComponent } from './about/about.component';
import { CoreComponent } from './core/core.component';
import { TeamComponent } from './team/team.component';
import { WhatComponent } from './what/what.component';
import { BlogComponent } from "./blog/blog.component";
import { ProductHomeComponent } from "./product-home/product-home.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    LanderComponent,
    WhyComponent,
    WhatComponent,
    AboutComponent,
    CoreComponent,
    FooterComponent,
    // ContactComponent,
    TeamComponent,
    BlogComponent,
    ProductHomeComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
