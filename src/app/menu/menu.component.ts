import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, HostListener } from '@angular/core';
import { UiService } from '../services/ui.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent implements AfterViewInit {
  activeSection: string = '';
  private sectionClasses = [
    'lander',
    'about',
    'core',
    'blog',
    'producthome',
    'productdetail',
  ];

  constructor(
    public uiService: UiService,
    private router: Router,
  ) {}

  ngAfterViewInit(): void {
    this.validateSection();
  }

  validateSection = () => {
    try {
      setTimeout(() => {
        for (const className of this.sectionClasses) {
          const section = document.querySelector(`.${className}_section`);
          if (section) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
              this.activeSection = className;
              break;
            }
          }
        }
      }, 500);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.validateSection();
  }

  onClick = (to: string) => {
    const isRoot: boolean = this.router.url === '/';
    if (['lander', 'about', 'core', 'producthome', 'blog'].includes(to) && isRoot) {
      this.uiService.scrollToSection(`.${to}_section`);
    } else if (['lander', 'about', 'core', 'producthome', 'blog'].includes(to) && !isRoot) {
      this.router.navigate(['/']);
      setTimeout(() => {
        this.uiService.scrollToSection(`.${to}_section`);
      }, 300);
    }
  };
}
