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

  // NIEUW STUK
  accounts: Account[];
  account: Account = new Account();
  // EINDE STUK

  // + public accountservice: AccountService
  constructor(public accountservice: AccountService, private router: Router) {}

  ngOnInit() {
    this.accountservice.Opslagaccount.username="tom";
    console.log(this.accountservice.Opslagaccount.username);
  }

  goAccountPage(account: Account){
    this.router.navigate(["account"])
  }

// NIEUW STUK
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
  this.goAccountPage(this.account);
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

// EINDE STUK


}
