import { Component, EventEmitter, Output } from '@angular/core';
import { OutsideclickDirective } from '../../directives/outside-click.directive';

@Component({
  selector: 'app-coming-soon',
  standalone: true,
  imports: [OutsideclickDirective],
  templateUrl: './coming-soon.component.html',
  styleUrl: './coming-soon.component.scss',
})
export class ComingSoonComponent {
  @Output() exitCS = new EventEmitter<boolean>();
}
