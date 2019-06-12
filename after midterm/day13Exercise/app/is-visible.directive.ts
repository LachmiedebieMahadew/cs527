import { Directive, Input, ElementRef,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appIsVisible]'
})
export class IsVisibleDirective {
@Input() appIsVisible:boolean

  constructor(private element: ElementRef, private renderer2: Renderer2) { }

  ngOnInit() {

    if (!this.appIsVisible) {

      this.renderer2.setStyle(this.element.nativeElement, "display", "none");

    }

  }
}
