import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Account } from '../domain/account';
import { AccountService } from '../service/account.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
  
})
export class HomeComponent implements OnInit {

  accounts: Account[];
  account: Account = new Account();

  constructor(
    public accountservice: AccountService,
    private router: Router) { }

  ngOnInit() {

  }

  checkAccount() {
    this.accountservice.checkAccount(this.account).subscribe(
      (account: Account) =>
        this.account = account,
      (f: HttpErrorResponse) =>
        alert("There is a problem: " +
          f.error.error.status + " " + f.error.error + "\n" +
          "\nMessage:\n" + f.error.message)
    )
    this.accountservice.accountOpslag = this.account,
      this.router.navigate(['account'])
  }


  forgotPassword() {
    this.accountservice.forgotPassword(this.account).subscribe(
      (account: Account) => {
        this.account.password = account.password;
      }
    )
  }

  forgotUsername() {
    this.accountservice.forgotUsername(this.account).subscribe(
      (account: Account) => {
        this.account.username = account.username;
      }
    )
  }

  goRegisterPage(){
    this.router.navigate(["register"])
  }

}
