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
  account: Account = new Account();

  constructor(public accountservice: AccountService) { }

  ngOnInit() {

  }

  viewAccount() {
    this.accountservice.retrieveAll().subscribe(
      (accounts: Account[]) => {
        // console.log(account);
        this.accounts = accounts
      }

    )
  }

  createAccount() {
    console.log(this.account);
    this.account.id = 0;

    this.accountservice.createAccount(this.account).subscribe(
      (account: Account) => {

        console.log(account);
        this.account = account;
      }


    )
  }

  getAccount() {
    this.account.id = 1;
    this.accountservice.retrieveOne(this.account).subscribe(
      (account: Account) => {
        this.account = account;
        console.log(account);
      }
    )
  }

  updateEmail() {
    

    this.accountservice.changeEmail(this.account).subscribe(
      (account: Account) => {
      this.account = account;
      console.log(account);
      
      }
    )
  }

}
