import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = "app";
  userForm: FormGroup;
  submitted: boolean = false;
  constructor(private fb : FormBuilder) { }

  ngOnInit() {
    this.setFormGroup();
  }

  setFormGroup(){
    this.userForm = this.fb.group({
      username: ['',Validators.required],
      email: ['',[Validators.required,Validators.email]],
      phone: ['',Validators.required]
    });
  }

  onSubmit(){
    this.submitted = true;
    if(this.userForm.valid){
        console.log('Form Submitted');
    }
  }

}