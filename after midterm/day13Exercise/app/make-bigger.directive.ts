import { Directive, ElementRef,Renderer2,HostBinding,HostListener} from '@angular/core';

@Directive({
  selector: '[appMakeBigger]'
})
export class MakeBiggerDirective {
  @HostBinding("style.fontSize") fontSize = "12px";

  constructor(private element: ElementRef, private renderer2: Renderer2) {

  }

  @HostListener('dblclick') dblclick() {

    this.fontSize = parseInt(this.fontSize) + 2 + "px";

    this.renderer2.setStyle(this.element.nativeElement, "font-size", this.fontSize);

  }
}
