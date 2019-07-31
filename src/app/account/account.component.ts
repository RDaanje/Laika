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
  account: Account;


  constructor(public accountservice: AccountService) { }

  ngOnInit() {

  }

  viewAccount() {
    this.accountservice.retrieveAll().subscribe(
      (accounts: Account[]) => 
      {this.accounts = accounts},
      
    )
  }

  createAccount(username: string, password: string, email: string){
    this.accountservice.setAccount(this.account).subscribe(
      (account: Account) =>
      {this.account = new Account(username,password,email)}
    )
  }

}
