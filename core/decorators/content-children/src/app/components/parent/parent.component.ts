import { Component, OnInit, ElementRef, QueryList, ContentChildren } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { ChildDirective } from '../../directives/child.directive';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {


  @ContentChildren(ChildComponent) childComponents : QueryList<ChildComponent>;
  @ContentChildren(ChildDirective) childDirectives : QueryList<ChildDirective>;
  @ContentChildren('ChildElement') childElements : QueryList<ElementRef>;

  constructor() { }

  ngOnInit() {

  }

  accessChildComponentClassInstanceMethod(){
    this.childComponents.forEach(childComponent=>{
      childComponent.generateRandom();
    });
  }

  accessChildDirectiveClassInstanceMethod(){
    this.childDirectives.forEach(childDirective=>{
      childDirective.generateRandom();
    });
  }

  accessTemplateReferenceDOM(){
    this.childElements.forEach(childElement=>{
      childElement.nativeElement.textContent = Math.ceil(Math.random()*1000);
    });
  }
}
