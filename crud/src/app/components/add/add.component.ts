import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  userForm: FormGroup;
  submitted: boolean = false;
  constructor(private userService : UserService, private formBuilder : FormBuilder, private router : Router) { }

  ngOnInit() {
    this.setFormGroup();
  }

  setFormGroup(){
    this.userForm = this.formBuilder.group({
      name: ['',Validators.required],
      username: ['',Validators.required],
      email: ['',[Validators.email]],
      address : this.formBuilder.group({
        street: ['',Validators.required],
        suite: ['',Validators.required],
        city: ['',Validators.required],
        zipcode: ['',Validators.required],
        geo : this.formBuilder.group({
          lat: ['',Validators.required],
          lng: ['',Validators.required]
        })
      }),
      phone: ['',Validators.required],
      website: ['',Validators.required],
      company : this.formBuilder.group({
        name: ['',Validators.required],
        catchPhrase: ['',Validators.required],
        bs: ['',Validators.required]
      }),
    });
  }

  onSubmit(form : FormGroup){
    this.submitted = true;
    this.userService.addUser(form.value).subscribe( () => {
      return this.router.navigate(['']);
    });
  }

}
