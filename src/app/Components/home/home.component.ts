import { Component, OnInit } from '@angular/core';
import { Account } from '../../domain/account';
import { AccountService } from '../../service/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public show: boolean = false;


  constructor(
    public accountservice: AccountService,
    private router: Router) { }

  ngOnInit() {

  }

  checkAccount(usernameInput: string, passwordInput: string) {
    this.accountservice.accountOpslag.username = usernameInput;
    this.accountservice.accountOpslag.password = passwordInput;

    this.accountservice.checkAccount(this.accountservice.accountOpslag).subscribe(
      (account: Account) =>
        this.accountservice.accountOpslag = account,
      () =>
        alert("The username and/or password you provided are unknown to us"),
      () =>
        this.router.navigate(['account'])
    )
    console.log('controle: ' + this.accountservice.accountOpslag)

  }


  forgotInfo(emailInput: string) {
    this.accountservice.accountOpslag.email = emailInput;
    this.accountservice.forgotInfo(this.accountservice.accountOpslag).subscribe(
      (account: Account) =>
        this.accountservice.accountOpslag.password = account.password,
      () =>
        alert('This E-mail is unknown to us'),
      () =>
        alert('Your password is: ' + this.accountservice.accountOpslag.password)
    )

  }

  goRegisterPage() {
    this.router.navigate(["register"])
  }

  revealInput() {
    this.show = !this.show;
  }
}

