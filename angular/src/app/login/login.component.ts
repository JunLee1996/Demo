import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './shared/login.service';
import { User } from './shared/user.model';
import { HttpErrorResponse } from '@angular/common/http';
import { AppService } from '../shared/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User
  validateForm: FormGroup;
  constructor(private fb: FormBuilder,private ls:LoginService,private as:AppService,private router:Router) {
    this.user={
    id: 0,
    name:null,
    username:null,
    password:null,
    roles:null
    }
  }

  ngOnInit(): void {
    this.ls.getConfig().subscribe(s=>{
      console.log(s);
    })
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if (!this.validateForm.valid){
      return;
    }
    this.ls.login(this.user).subscribe(
      r=>{
        console.log(r)
        this.as.user=r;
        this.router.navigate(['/manage']);
      },
     error=>alert(error.error) // error path
    )
  }
}
