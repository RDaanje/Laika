import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/service/account.service';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { Account } from 'src/app/domain/account';

@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.css']
})
export class SignoutComponent implements OnInit {

  constructor(
    private accountservice: AccountService,
    private router: Router,
    private app: AppComponent) { }

  ngOnInit() {
    this.logOut();
  }

  logOut()  {   
    this.accountservice.accountOpslag = new Account();
    this.router.navigate(['home']);
    
  }

}
