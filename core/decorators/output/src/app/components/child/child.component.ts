import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  @Output('onRandom')
  onRandom = new EventEmitter<number>();

  ngOnInit() {
  }

  sendRandom(){
    this.onRandom.emit(Math.ceil(Math.random()*1000));
  }

}
