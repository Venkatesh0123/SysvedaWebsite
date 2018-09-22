import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  userForm: FormGroup;
  id: number;
  submitted: boolean = false;
  
  constructor(private userService : UserService, private formBuilder : FormBuilder, private router : Router, private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.setFormGroup();
    this.id = this.activatedRoute.snapshot.params['id'];
    this.userService.editUser(this.id).subscribe( user => {
        this.userForm.setValue(user);
    });
  }

  setFormGroup(){
    this.userForm = this.formBuilder.group({
      id : '',
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
    this.userService.updateUser(this.id,form.value).subscribe( () => {
      return this.router.navigate(['']);
    });
  }

}
