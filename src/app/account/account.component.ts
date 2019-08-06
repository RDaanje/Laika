import { Component, OnInit, Output } from '@angular/core';
import { Account } from '../domain/account';
import { AccountService } from '../service/account.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  accounts: Account[];
  //public account: Account = new Account();  

  constructor(public accountservice: AccountService, private router: Router) { 
   
  }

  ngOnInit() {
   
  //  this.accountservice. = this.accountservice.accountOpslag;
  }

  goToChangeAccount() {
    this.router.navigate(['/modify-account']);

  } 

  viewAccount() {
    this.accountservice.retrieveAll().subscribe(
      (accounts: Account[]) => 
      {
   
        this.accounts = accounts;

      }

    )
  }

  createAccount() {
    //console.log(this.account);
    //this.account.id = 0;

    this.accountservice.createAccount(this.accountservice.accountOpslag).subscribe(
      (accountvandatabase : Account) => 
      {

      console.log(accountvandatabase);
      this.accountservice.accountOpslag = accountvandatabase;
      }
    )
  }

  getAccount() {
    //this.account.id = 1;
    this.accountservice.retrieveOne(this.accountservice.accountOpslag).subscribe(
      (account: Account) => {
        this.accountservice.accountOpslag = account
      }
    )
  }
}
