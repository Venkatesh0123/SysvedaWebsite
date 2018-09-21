import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = "app";
  number:number = 0;

  handleRandom(number){
    this.number = number;
  }

}