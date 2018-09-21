import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appChild]'
})
export class ChildDirective {

  constructor(private el: ElementRef) { }

  generateRandom(){
    this.el.nativeElement.textContent = Math.ceil(Math.random()*1000);;
  }

}
