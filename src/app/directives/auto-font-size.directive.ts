import { Directive, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAutoFontSize]',
  standalone: true,
})
export class AutoFontSizeDirective implements OnInit {
  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.setFontSize();
  }

  @HostListener('window:resize')
  onResize() {
    this.setFontSize();
  }

  private setFontSize() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    const isLandscape = width > height;

    if (isLandscape) {
      const factor = 0.00637;
      const fontSize = factor * width;
      this.renderer.setStyle(
        document.documentElement,
        'font-size',
        `${fontSize}px`,
      );
    } else {
      const portraitFactor = 0.01856;
      const fontSize = portraitFactor * width;
      this.renderer.setStyle(
        document.documentElement,
        'font-size',
        `${fontSize}px`,
      );
    }
  }
}
