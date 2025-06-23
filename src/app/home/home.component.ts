import { Component } from '@angular/core';
import { LanderComponent } from './lander/lander.component';
import { WhyComponent } from './why/why.component';
import { FooterComponent } from '../footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoreComponent } from './core/core.component';
import { TeamComponent } from './team/team.component';
import { WhatComponent } from './what/what.component';

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
    ContactComponent,
    TeamComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
