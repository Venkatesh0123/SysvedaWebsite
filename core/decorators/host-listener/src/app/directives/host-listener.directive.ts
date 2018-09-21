import { Directive, Renderer2, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHostListener]'
})
export class HostListenerDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }


  @HostListener('click')
  changeBackground() {
    this.renderer.setStyle(this.el.nativeElement,'background-color','#ffc107');
  }

}
