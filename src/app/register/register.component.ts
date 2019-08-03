import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from '../domain/account';
import { AccountService } from '../service/account.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  
  accounts: Account[];
  account: Account = new Account();
  
  constructor(public accountservice: AccountService, private router: Router) {}

  ngOnInit() {
    this.account = this.accountservice.accountOpslag;    
  }

  goAccountPage(){
    this.router.navigate(["account"])
  }


createAccount() {
  console.log(this.account);
  this.account.id = 0;

  this.accountservice.createAccount(this.account).subscribe(
    (accountvandatabase : Account) => 
    {

    console.log(accountvandatabase);
    this.account = accountvandatabase;
    this.accountservice.accountOpslag = this.account;
    }
  )
  this.goAccountPage();
}

viewAccount() {
    this.accountservice.retrieveAll().subscribe(
      (accounts2: Account[]) => 
      {
        this.accounts = accounts2
      }
      
    )
  }

  retrieveOne() {
    this.accountservice.retrieveOne(this.account).subscribe(
      (accountvandatabase: Account) => 
      {
        this.account = accountvandatabase;
      }
      
    )
  }


}
