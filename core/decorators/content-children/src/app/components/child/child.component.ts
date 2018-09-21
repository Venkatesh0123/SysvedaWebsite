import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  number:number = 0;

  constructor() { }

  ngOnInit() {
  }

  generateRandom(){
    this.number = Math.ceil(Math.random()*1000);
  }
}
