import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  constructor(private router: Router) {}

  scrollToSection = (sectionSelector: string) => {
    const element = document.querySelector(sectionSelector);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  routeToPage = (path: string) => {
    this.router.navigate([path])
  }
}
