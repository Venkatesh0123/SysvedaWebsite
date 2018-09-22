import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  users : any = [];
  constructor(private userService : UserService) { }

  ngOnInit() {
    this.userService.users().subscribe( data => {
      this.users = data;
    });
  }

  deleteUser(id : number){
    this.userService.deleteUser(id).subscribe( () => {
      this.users = this.users.filter( user => user.id != id );
    });
  }

}
