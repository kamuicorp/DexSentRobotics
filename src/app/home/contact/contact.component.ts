import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  contactExtras: string[] = [
    'AI-Powered Process',
    'Intelligent Virtual',
    'Custom Machine',
    'Data-Driven Predictive',
    'Advanced Natural',
    'Smart Internet',
    'Cutting-Edge Vision',
    'Efficient Robotic',
  ];
}
