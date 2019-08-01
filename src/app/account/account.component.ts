import { Component, OnInit } from '@angular/core';
import { Account } from '../domain/account';
import { AccountService } from '../service/account.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  accounts: Account[];
  account: Account  = new Account();

  constructor(public accountservice: AccountService) { }

  ngOnInit() {
    
  }

  viewAccount() {
    this.accountservice.retrieveAll().subscribe(
      (accounts2: Account[]) => 
      {
        // console.log(account);
        this.accounts = accounts2
      }
      
    )
  }

  updateEmail() {
    this.accountservice.changeEmail(this.account).subscribe(
      (accountvandatabase: Account) =>
      {
        console.log(accountvandatabase);
        this.account = accountvandatabase;
      }
    )
  }

  createAccount() {
    console.log(this.account);
    this.account.id = 0;

    this.accountservice.createAccount(this.account).subscribe(
      (accountvandatabase : Account) => 
      {

      console.log(accountvandatabase);
      this.account = accountvandatabase;
      }

    
    )
  }

  forgotPassword(){
    this.accountservice.forgotPassword(this.account).subscribe(
      (account : Account) =>
      {
       console.log(account);
      //  this.account = account; 
       this.account.password = account.password;
      }
    )
  }

  forgotUsername(){
    this.accountservice.forgotUsername(this.account).subscribe(
    (account : Account) =>
    {
      console.log(account);
      this.account.username = account.username;
    }
    )
  }
}
