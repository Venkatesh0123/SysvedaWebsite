import { Component, OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.css']
})
export class LifecycleHooksComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  hooks: string[] = [];

  @Input() title: string;

  constructor(){
    this.hooks.push('constructor')
  }

  ngOnChanges(){
    this.hooks.push('OnChanges');
  }

  ngOnInit(){
    this.hooks.push('OnInit');
  }

  ngDoCheck(){
    this.hooks.push('DoCheck');
  }

  ngAfterContentInit(){
    this.hooks.push('AfterContentInit');
  }

  ngAfterContentChecked(){
    this.hooks.push('AfterContentChecked');
  }

  ngAfterViewInit(){
    this.hooks.push('AfterViewInit');
  }

  ngAfterViewChecked(){
    this.hooks.push('AfterViewChecked');
  }

  ngOnDestroy(){
    this.hooks.push('OnDestroy');
  }


}
