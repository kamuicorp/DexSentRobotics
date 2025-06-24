import { Component } from '@angular/core';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-what',
  standalone: true,
  imports: [],
  templateUrl: './what.component.html',
  styleUrl: './what.component.scss'
})
export class WhatComponent {
  constructor(public uiService: UiService){}
}
