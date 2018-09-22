import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = "app";
  users: any = [];
  user: any = {};
  insertPayload: any = {
    "username":"John",
    "email":"John@example.com",
    "phone":"2549541289"
  }
  updatePayload: any = {
    "id":1,
    "username":"John",
    "email":"John@example.com",
    "phone":"2549541289"
 }
 patchPayload: any = {
  "username":"John Doe"
}

  constructor(private http:HttpClient){

  }

  ngOnInit() {
  
  }

  getUsers(){
    this.http.get(`http://localhost:3000/users`).subscribe(users=>{
      this.users = users;
    });
  }

  getUser(){
    this.http.get(`http://localhost:3000/users/1`).subscribe(user=>{
      this.user = user;
    });
  }

  addUser(){
    this.http.post(`http://localhost:3000/users`,this.insertPayload).subscribe(response=>{
      alert('Saved Successfully');
    });
  }

  updateUser(){
    this.http.put(`http://localhost:3000/users/1`,this.updatePayload).subscribe(response=>{
      alert('Updated Successfully');
    });
  }

  patchUser(){
    this.http.put(`http://localhost:3000/users/1`,this.patchPayload).subscribe(response=>{
      alert('Updated Successfully');
    });
  }

  deleteUser(){
    this.http.delete(`http://localhost:3000/users/6`).subscribe(
    response=>{
      alert('Deleted Successfully');
    },
    error=>{
      alert('Record Already Successfully');
    },
    ()=>{
      console.log('Finally');
    });
  }
 

}