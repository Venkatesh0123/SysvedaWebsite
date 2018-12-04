import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private route:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
  }

  home()
  {
   this.route.navigate(["home"])
  }
  about()
  {
  this.route.navigate(["about"])
  }

}
