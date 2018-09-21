import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHostBinding]'
})
export class HostBindingDirective {

  constructor() { }

  @HostBinding('style.backgroundColor')
  backgroundColor: string = "#ffc107";

}
