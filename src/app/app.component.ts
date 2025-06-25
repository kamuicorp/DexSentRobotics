import { Component } from '@angular/core';
import { LanderComponent } from './home/lander/lander.component';
import { MenuComponent } from './menu/menu.component';
import { WhyComponent } from './home/why/why.component';
import { WhatComponent } from './home/what/what.component';
import { AboutComponent } from './home/about/about.component';
import { CoreComponent } from './home/core/core.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './home/contact/contact.component';
import { TeamComponent } from './home/team/team.component';
import { RouterOutlet } from '@angular/router';
import { AutoFontSizeDirective } from './directives/auto-font-size.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MenuComponent,
    AutoFontSizeDirective
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
