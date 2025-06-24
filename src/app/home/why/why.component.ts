import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-why',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './why.component.html',
  styleUrl: './why.component.scss',
})
export class WhyComponent {
  purposeData: { icon: string; title: string; short: string }[] = [
    {
      icon: 'apps-add',
      title: 'Built with purpose',
      short: 'Every system we design addresses a real-world problem.',
    },
    {
      icon: 'angle-double-small-right',
      title: 'Fast innovation',
      short: 'Safe, intuitive and meaningful interaction.',
    },
    {
      icon: 'users',
      title: 'Human-Centric',
      short: 'Agile team capable of rapid development and deployment',
    },
    {
      icon: 'social-network',
      title: 'Indigenous excellence',
      short: 'Proudly developed in India for global relevance.',
    },
  ];

  constructor(public uiService: UiService){}
}
