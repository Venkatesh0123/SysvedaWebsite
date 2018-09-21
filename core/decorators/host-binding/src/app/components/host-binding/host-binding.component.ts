import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-host-binding',
  templateUrl: './host-binding.component.html',
  styleUrls: ['./host-binding.component.css']
})
export class HostBindingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @HostBinding('style.backgroundColor')
  backgroundColor: string = "#ffc107";

}
