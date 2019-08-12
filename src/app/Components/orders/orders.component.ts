import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/domain/account';
import { AccountService } from 'src/app/service/account.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
    localAccount: Account = new Account();
  constructor(private accountservice: AccountService) { 
    this.localAccount = this.accountservice.getOpslag('currentUser');
  }

  ngOnInit() {
  }


  acceptOrder() {
    alert('this order has been accepted');
  }

}
