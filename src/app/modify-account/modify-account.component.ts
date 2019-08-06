import { Component, OnInit, Input, Output } from '@angular/core';
import { AccountService } from '../service/account.service';
import { Router } from '@angular/router';
import { Account } from '../domain/account';
import { AccountComponent } from '../account/account.component';


@Component({
  selector: 'app-modify-account',
  templateUrl: './modify-account.component.html',
  styleUrls: ['./modify-account.component.css']
})
export class ModifyAccountComponent implements OnInit {

  //public account: Account;
  constructor(private accountservice: AccountService, private router: Router) {
   
  }

  ngOnInit() {
    console.log(this.accountservice.accountOpslag);
  }

  changeInfo() {
    this.accountservice.updateAccount(this.accountservice.accountOpslag).subscribe(
      (account: Account) => {
        this.accountservice.accountOpslag = account;

      }

    )
    this.router.navigate([`/account`]);
  }

}