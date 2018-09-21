import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { ChildDirective } from '../../directives/child.directive';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {


  @ViewChild(ChildComponent) childComponent : ChildComponent;
  @ViewChild(ChildDirective) childDirective : ChildDirective;
  @ViewChild('ChildElement') childElement : ElementRef;

  constructor() { }

  ngOnInit() {

  }

  accessChildComponentClassInstanceMethod(){
    this.childComponent.generateRandom();
  }

  accessChildDirectiveClassInstanceMethod(){
    this.childDirective.generateRandom();
  }

  accessTemplateReferenceDOM(){
    this.childElement.nativeElement.textContent = Math.ceil(Math.random()*1000);
  }
}
