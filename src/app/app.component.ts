import { Component } from '@angular/core';
import { LanderComponent } from './lander/lander.component';
import { MenuComponent } from './menu/menu.component';
import { WhyComponent } from './why/why.component';
import { WhatComponent } from './what/what.component';
import { AboutComponent } from './about/about.component';
import { CoreComponent } from './core/core.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { TeamComponent } from './team/team.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    LanderComponent,
    MenuComponent,
    WhyComponent,
    WhatComponent,
    AboutComponent,
    CoreComponent,
    FooterComponent,
    ContactComponent,
    TeamComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
