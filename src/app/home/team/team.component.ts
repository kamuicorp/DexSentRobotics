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
  leaders: { img: string; name: string; details: string }[] = [
    {
      img: '/images/founder/barat.jpeg',
      name: 'Barat S',
      details: 'Director, Gandhinagar',
    },
    {
      img: '/images/founder/praveen.jpeg',
      name: 'Praveen Suresh',
      details: 'Director, Bengaluru',
    },
    {
      img: '/images/founder/harish.jpeg',
      name: 'Harish PM',
      details: 'Director, Gandhinagar',
    },
  ];
  teams: { img: string; name: string; details: string }[] = [
    {
      img: '/images/team/kaivalya-shah.png',
      name: 'Kaivalya Shah',
      details: 'Lead Engineer, Gandhinagar',
    }
  ];
}
