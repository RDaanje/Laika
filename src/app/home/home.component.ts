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
  //account: Account = new Account();

  constructor(
    public accountservice: AccountService,
    private router: Router) { }

  ngOnInit() { }

  checkAccount() {
    this.accountservice.checkAccount(this.accountservice.accountOpslag).subscribe(
      (account: Account) =>
        this.accountservice.accountOpslag = account,
      (f: HttpErrorResponse) =>
        alert("There is a problem: " +
          f.error.error.status + " " + f.error.error + "\n" +
          "\nMessage:\n" + f.error.message)
    )
      this.router.navigate(['account'])
  }


  forgotPassword() {
    this.accountservice.forgotPassword(this.accountservice.accountOpslag).subscribe(
      (account: Account) => {
      }
    )
  }

  forgotUsername() {
    this.accountservice.forgotUsername(this.accountservice.accountOpslag).subscribe(
      (account: Account) => {
      }
    )
  }

  goRegisterPage(){
    this.router.navigate(["register"])
  }

}
