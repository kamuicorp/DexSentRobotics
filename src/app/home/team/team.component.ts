import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss',
})
export class TeamComponent {
  leaders: { img: string; name: string; details: string; link: string }[] = [
    {
      img: '/images/founder/barat.jpeg',
      name: 'Barat S',
      link: 'https://www.google.com/',
      details: 'Director, Gandhinagar',
    },
    {
      img: '/images/founder/praveen.jpeg',
      link: 'https://www.google.com/',
      name: 'Praveen Suresh',
      details: 'Director, Bengaluru',
    },
    {
      link: 'https://www.google.com/',
      img: '/images/founder/harish.jpeg',
      name: 'Harish PM',
      details: 'Director, Gandhinagar',
    },
  ];
  teams: { img: string; name: string; details: string; link: string }[] = [
    {
      link: 'https://www.google.com/',
      img: '/images/team/kaivalya-shah.png',
      name: 'Kaivalya Shah',
      details: 'Lead Engineer, Gandhinagar',
    },
  ];

  redirect(link: string) {
    try {
      window.open(link, '_blank');
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
