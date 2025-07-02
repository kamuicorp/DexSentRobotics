import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appOutsideclick]',
  standalone: true,
})
export class OutsideclickDirective {
  @Output() outsideClick = new EventEmitter<void>();
  @Input() clickExceptions = [];

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  onClick(event: Event): void {
    const targetElement = event.target as HTMLElement;
    let skipEmit = false;

    if (this.clickExceptions.length) {
      this.clickExceptions.forEach((natEl: any) => {
        if (natEl && !skipEmit && natEl?.contains(targetElement))
          skipEmit = true;
      });
    }

    if (!this.elementRef.nativeElement.contains(targetElement) && !skipEmit) {
      this.outsideClick.emit();
    }
  }
}
