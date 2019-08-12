import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/service/account.service';
import { Product } from 'src/app/domain/product';
import { Router } from '@angular/router';
import { Account } from 'src/app/domain/account';

@Component({
  selector: 'app-shopcart',
  templateUrl: './shopcart.component.html',
  styleUrls: ['./shopcart.component.css']
})
export class ShopcartComponent implements OnInit {

  constructor(private accountservice: AccountService, private router: Router) { }

  ngOnInit() {
  }

  deleteProductFromCart(productInput: Product) {
    this.accountservice.removeProduct(productInput, this.accountservice.getOpslag('currentUser')).subscribe(
      (accountfromDataBase: Account) => {
        this.accountservice.setOpslag('currentUser', accountfromDataBase)
        this.ngOnInit();
      });

  }

  addToCart(productInvoer: Product){
    this.accountservice.addToCart(productInvoer,this.accountservice.accountOpslag).subscribe(

      (account: Account) =>
      {
        this.accountservice.setOpslag('currentUser', account);
        console.log(this.accountservice.getOpslag('currentUser'));
      }
    )
  } 
}