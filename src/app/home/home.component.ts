import { Component, OnInit } from '@angular/core';
import { Home } from '../domain/home';
import { HomeService } from '../service/home.service';
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
  account: Account  = new Account();

  constructor(
    public homeservice: HomeService,
    public accountservice: AccountService,
    private router: Router) { }

  ngOnInit() {
  
  }

  checkAccount() {
    this.accountservice.checkAccount(this.account).subscribe(
      (account : Account) => 
      this.account = account,
      (f : HttpErrorResponse) =>
      alert("There is a problem: " +
        f.error.error.status + " " + f.error.error + "\n" +
        "\nMessage:\n" + f.error.message)//,
       // () => this.router.navigate(['account'] ) 
       )
    }
  

  // forgotPassword(){
  //   this.homeservice.forgotPassword(this.home).subscribe(
  //     (home : Home) =>
  //     {
  //      console.log(home);
  //     //  this.home = home; 
  //      this.home.password = home.password;
  //     }
  //   )
  // }

  // forgotUsername(){
  //   this.homeservice.forgotUsername(this.home).subscribe(
  //   (home : Home) =>
  //   {
  //     console.log(home);
  //     this.home.username = home.username;
  //   }
  //   )
  // }

 }
