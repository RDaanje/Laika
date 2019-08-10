import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from '../../domain/account';
import { AccountService } from '../../service/account.service';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  registerForm;
  currentUser: any;

  lokaalVar: Account = new Account();

  constructor(public accountservice: AccountService, 
    private router: Router, 
    private formBuilder: FormBuilder) {
      this.accountservice.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      Username: new FormControl('', Validators.required),
      Password: new FormControl('', Validators.required),
      Password2: new FormControl('', Validators.required),
      Email: new FormControl('', Validators.required)
    })



  }

  createAccount(newUsername: string, newPassword: string, newEmail: string) {
    this.lokaalVar.username = newUsername;
    this.lokaalVar.password = newPassword;
    this.lokaalVar.email = newEmail;


    this.accountservice.createAccount(this.lokaalVar).subscribe(
      (accountvandatabase: Account) =>  {       
        this.accountservice.setOpslag('currentUser', accountvandatabase);
        this.accountservice.currentUserSubject.next(accountvandatabase);
        this.accountservice.username();       
      },        
      (error: HttpErrorResponse) => { 
        if (error.status == 409){         
          alert(`This username is already taken!`);          
        } else if (error.status == 302) {
          alert(`This e-mail is already registered!`);
        }
      },         
      () => {        
        this.router.navigate(['account']);        
      }
        
    )    
  }

  validateForm() {
    var a = this.registerForm.get('Username').value;
    var b = this.registerForm.get('Password').value;
    var c = this.registerForm.get('Password2').value;
    var d = this.registerForm.get('Email').value;

    if (a == "") {
      alert("Username must be filled out");
      return false;
    } 
    if (b == "") {
      alert("Password must be filled out");
      return false;
    }
    if (d == "") {
      alert("E-mail must be filled out");
      return false;
    }
    if (!(b==c)) {
      alert("Passwords do not match");
      return false;
    }
    this.createAccount(this.registerForm.get('Username').value, this.registerForm.get('Password').value, this.registerForm.get('Email').value)
  }
  
  get Username() { return this.registerForm.get('Username'); }
  get Password() { return this.registerForm.get('Password'); }
  get Password2() { return this.registerForm.get('Password2'); }
  get Email() { return this.registerForm.get('Email'); }
}
