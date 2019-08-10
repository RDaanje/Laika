import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/service/account.service';
import { Account } from 'src/app/domain/account';
import { Router } from '@angular/router';
import { TouchSequence } from 'selenium-webdriver';
import { ResourceLoader } from '@angular/compiler';

@Component({
  selector: 'app-overview-accounts',
  templateUrl: './overview-accounts.component.html',
  styleUrls: ['./overview-accounts.component.css']
})
export class OverviewAccountsComponent implements OnInit {

  accounts = [];
  account = new Account();
  constructor(private accountservice: AccountService, private router: Router) { }

  ngOnInit() {
   
    this.accountservice.retrieveAll().subscribe(
      (account: Account[]) => {
        this.accounts = [];
        this.accounts = account;
        console.log(this.accounts);
      }
    )

 
  
  }

  deleteAccount(account: Account) {
    console.log(account);
    this.accountservice.deleteAccount(account).subscribe(
      () => {       
        location.reload();
      }
    )

  }


}