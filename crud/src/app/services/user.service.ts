import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserResponse } from '../interfaces/user-response';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient : HttpClient) { }

  users(){
      return this.httpClient.get<UserResponse>('http://localhost:3000/users');
  }

  addUser(user){
    return this.httpClient.post('http://localhost:3000/users',user);
  }

  editUser(id){
    return this.httpClient.get(`http://localhost:3000/users/${id}`);
  }

  updateUser(id,user){
    return this.httpClient.put(`http://localhost:3000/users/${id}`,user);
  }

  deleteUser(id){
    return this.httpClient.delete(`http://localhost:3000/users/${id}`);
  }


  
}
