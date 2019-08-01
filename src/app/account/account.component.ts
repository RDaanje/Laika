import { Component, OnInit, Output } from '@angular/core';
import { Account } from '../domain/account';
import { AccountService } from '../service/account.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router'
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  public account : Account;
  accounts: Account[];

  public account: Account = new Account();
  

  constructor(public accountservice: AccountService, private router: Router) { 
   
  }

  ngOnInit() {
   
    this.account.id = 1
   this.accountservice.retrieveOne(this.account).subscribe(
    (account: Account) => 
    {
      this.account = account;
      this.accountservice.accountOpslag = this.account;
      console.log('Account com log : ' + this.accountservice.accountOpslag.firstname)
    }
   )
     
  }

  goToChangeAccount() {
    this.router.navigate(['/modify-account']);

  }

  
  goRegisterPage(){
    this.router.navigate(["register"])
  }

  

  viewAccount() {
    this.accountservice.retrieveAll().subscribe(
      (accounts: Account[]) => 
      {

        // console.log(account);
        this.accounts = accounts;

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
