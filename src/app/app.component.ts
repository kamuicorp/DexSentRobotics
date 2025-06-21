import { Component } from '@angular/core';
import { LanderComponent } from './lander/lander.component';
import { MenuComponent } from './menu/menu.component';
import { WhyComponent } from './why/why.component';
import { WhatComponent } from './what/what.component';
import { AboutComponent } from './about/about.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    LanderComponent,
    MenuComponent,
    WhyComponent,
    WhatComponent,
    AboutComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
