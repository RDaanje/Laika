import { Component, OnInit } from '@angular/core';
import { Account } from '../domain/account';
import { AccountService } from '../service/account.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  public account : Account;
  accounts: Account[];

  constructor(
    public accountservice: AccountService,private router: Router) {}

  ngOnInit() {
  }

  // NIEUWE METHODE
  goRegisterPage(){
    this.router.navigate(["register"])
  }

  // EINDE METHODE

  viewAccount() {
    this.accountservice.retrieveAll().subscribe(
      (accounts2: Account[]) => 
      {
        this.accounts = accounts2
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
}
