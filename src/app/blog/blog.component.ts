import { Component } from '@angular/core';
import { ComingSoonComponent } from '../shared/coming-soon/coming-soon.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [ComingSoonComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
})
export class BlogComponent {}
