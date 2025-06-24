import { Component } from '@angular/core';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-lander',
  standalone: true,
  imports: [],
  templateUrl: './lander.component.html',
  styleUrl: './lander.component.scss'
})
export class LanderComponent {
  constructor(public uiService: UiService){}
}
