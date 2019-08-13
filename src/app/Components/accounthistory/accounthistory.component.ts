import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/service/account.service';
import { Account } from 'src/app/domain/account';

@Component({
  selector: 'app-accounthistory',
  templateUrl: './accounthistory.component.html',
  styleUrls: ['./accounthistory.component.css']
})
export class AccounthistoryComponent implements OnInit {

  locAccount: Account = new Account();

  constructor(private accountservice: AccountService) { }

  ngOnInit() {
    this.locAccount = this.accountservice.getOpslag('currentUser');
    console.log(this.locAccount.orderhistory.orderSet);    
  }

}
