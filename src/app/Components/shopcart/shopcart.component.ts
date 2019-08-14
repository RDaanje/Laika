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

  account: Account = new Account();
  products: Product[];
  order: string = 'name';

  constructor(private accountservice: AccountService, private router: Router) { 
  }

  ngOnInit() {
    this.products = this.accountservice.accountOpslag.cart.productSet
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
        this.ngOnInit();
      }
    )
  }
  
  checkWallet() {
    this.account = this.accountservice.getOpslag('currentUser')

    if(this.account.wallet.euro>= this.account.cart.total)
    {
      console.log("GENOEG GELD")
      if(this.account.firstname == null|| this.account.firstname == ""){
        alert("GEGEVENS NIET COMPLEET")
        this.router.navigate(["modify-account"])
        return;
      }
      else if(this.account.lastname == null|| this.account.firstname == ""){
        alert("GEGEVENS NIET COMPLEET")
        this.router.navigate(["modify-account"])
        return;
      }
      else if(this.account.street == null|| this.account.firstname == ""){
        alert("GEGEVENS NIET COMPLEET")
        this.router.navigate(["modify-account"])
        return;
      }
      else if(this.account.houseNumber == null|| this.account.firstname == ""){
        alert("GEGEVENS NIET COMPLEET")
        this.router.navigate(["modify-account"])
        return;
      }
      else if(this.account.zipcode == null|| this.account.firstname == ""){
        alert("GEGEVENS NIET COMPLEET")
        this.router.navigate(["modify-account"])
        return;
      }
      else if(this.account.city == null|| this.account.firstname == ""){
        alert("GEGEVENS NIET COMPLEET")
        this.router.navigate(["modify-account"])
        return;
      }
      this.router.navigate(["orders"])
      console.log("HALLO");
 
     console.log(this.account.wallet.euro);
     console.log(this.account.cart.total);
     this.account.wallet.euro = (this.account.wallet.euro - this.account.cart.total);
     console.log(this.account.wallet.euro);
     this.accountservice.updateAccount(this.account).subscribe();
   }
   else{
     alert("NIET GENOEG GELD")
     this.router.navigate(["account"])
   }
  }
    
  
}