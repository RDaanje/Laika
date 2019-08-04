import { Component, OnInit, Output } from '@angular/core';
import { Account } from '../../domain/account';
import { AccountService } from '../../service/account.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  accounts: Account[];  

  constructor(public accountservice: AccountService, private router: Router) { 
   
  }

  ngOnInit() {
   
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
     

    this.accountservice.createAccount(this.accountservice.accountOpslag).subscribe(
      (accountvandatabase : Account) => 
      {
      this.accountservice.accountOpslag = accountvandatabase;
      }


    )
  }

  getAccount() {
    this.accountservice.retrieveOne(this.accountservice.accountOpslag).subscribe(
      (account: Account) => {
        this.accountservice.accountOpslag = account;
        console.log(account);
      }
    )
  }

  updateEmail() {    

    this.accountservice.changeEmail(this.accountservice.accountOpslag).subscribe(
      (account: Account) => {
      this.accountservice.accountOpslag = account;
      console.log(account);
      
      }
    )
  }


}
