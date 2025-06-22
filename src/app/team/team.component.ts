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
      img: '',
      name: 'Barat Suresh',
      details: 'Designation, Location',
    },
    {
      img: '',
      name: 'Praveen Suresh',
      details: 'Designation, Location',
    },
    {
      img: '',
      name: 'Harish p',
      details: 'Designation, Location',
    },
  ];
  teams: { img: string; name: string; details: string }[] = [
    {
      img: '',
      name: 'Barat Suresh',
      details: 'Designation, Location',
    },
    {
      img: '',
      name: 'Praveen Suresh',
      details: 'Designation, Location',
    },
    {
      img: '',
      name: 'Harish p',
      details: 'Designation, Location',
    },
    {
      img: '',
      name: 'Barat Suresh',
      details: 'Designation, Location',
    },
    {
      img: '',
      name: 'Praveen Suresh',
      details: 'Designation, Location',
    },
    {
      img: '',
      name: 'Harish p',
      details: 'Designation, Location',
    },
  ];
}
