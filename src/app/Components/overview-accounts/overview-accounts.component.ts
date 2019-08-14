import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/service/account.service';
import { Account } from 'src/app/domain/account';
import { Router } from '@angular/router';

@Component({
  selector: 'app-overview-accounts',
  templateUrl: './overview-accounts.component.html',
  styleUrls: ['./overview-accounts.component.css']
})
export class OverviewAccountsComponent implements OnInit {

  accounts = [];
  account = new Account();
  public show: boolean = false;
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
      }
    )
  }

  reveal(account: Account)  {
    console.log(account.showInvoice);
    account.showInvoice = !account.showInvoice;
  }
}
