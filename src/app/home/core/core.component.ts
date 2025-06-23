import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-core',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './core.component.html',
  styleUrl: './core.component.scss',
})
export class CoreComponent {
  coreContent: { letter: string; title: string; description: string }[] = [
    {
      letter: 'D',
      title: 'Design-Led Thinking',
      description:
        'We place thoughtful, human-centered design  at the core of everything we build—creating  robotics that are intuitive, safe, and delightful  to use.',
    },
    {
      letter: 'R',
      title: 'Real-World Impact',
      description:
        'Our innovations are grounded in purpose. We  focus on solving actual problems that improve  lives, not just building technology for its own  sake.',
    },
    {
      letter: 'I',
      title: 'Indigenous Excellence',
      description:
        'We are proud to develop robotics solutions  that are homegrown and globally  competitive—putting India on the map as a  leader in intelligent systems.',
    },
    {
      letter: 'V',
      title: 'Velocity With Vision',
      description:
        'Speed matters, but only when paired with  clarity. We move fast, make decisions quickly,  and adapt with intent to deliver value without  delay.',
    },
    {
      letter: 'E',
      title: 'Empowered Teams',
      description:
        'Our strength lies in collaboration. We believe  in ownership, curiosity, and bold  thinking—fostering a team culture where  ideas thrive and boundaries are pushed.',
    },
  ];
}
