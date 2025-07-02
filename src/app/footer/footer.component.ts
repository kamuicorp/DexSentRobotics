import { Component } from '@angular/core';
import { UiService } from '../services/ui.service';
import { ComingSoonComponent } from '../shared/coming-soon/coming-soon.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ComingSoonComponent, CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  showCsp: boolean = false;

  constructor(public uiService: UiService) {}

  redirect(link: string) {
    try {
      window.open(link, '_blank');
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
