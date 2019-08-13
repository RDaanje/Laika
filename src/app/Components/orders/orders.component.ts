import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/domain/account';
import { AccountService } from 'src/app/service/account.service';
import { Orders } from 'src/app/domain/orders';
import { OrderProduct } from 'src/app/domain/order-product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
    counter: number = 0;
    localAccount: Account = new Account();
    order: Orders = new Orders();
    ProductinOrder: OrderProduct = new OrderProduct();
    
  constructor(private accountservice: AccountService, private router: Router) { 
    this.localAccount = this.accountservice.getOpslag('currentUser');
  }

  ngOnInit() {
    this.localAccount = this.accountservice.getOpslag('currentUser');
  }

  createOrder() {
   
    this.order.date = (<HTMLSelectElement>document.getElementById('date')).innerHTML;
    this.order.status = (<HTMLSelectElement>document.getElementById('status')).innerHTML;
    this.order.name = (<HTMLSelectElement>document.getElementById('name')).innerHTML;
    this.order.adress = (<HTMLSelectElement>document.getElementById('adress')).innerHTML;
    this.order.zipcode = (<HTMLSelectElement>document.getElementById('zipcode')).innerHTML;
    this.order.email = (<HTMLSelectElement>document.getElementById('email')).innerHTML;
    this.order.counter = (<HTMLSelectElement>document.getElementById('counter')).innerHTML;
    this.order.total = this.accountservice.accountOpslag.cart.total.toString();

    for(let products of this.accountservice.accountOpslag.cart.productSet)  {
      
      this.ProductinOrder.productname = products.name;
      console.log(products)
      console.log(products.name);
      console.log(this.ProductinOrder.productname);
      this.ProductinOrder.productprice =  products.price.toString();
      this.ProductinOrder.productquantity =  products.quantity.toString();
      this.ProductinOrder.producttotal =  (products.price * products.quantity).toString();

      this.order.orderSubSet.push(this.ProductinOrder);
      this.ProductinOrder = new OrderProduct();
      console.log(this.order.orderSubSet);
    }
    

   this.localAccount.orderhistory.orderSet.push(this.order);
   this.localAccount.cart.productSet.length = 0;
   this.localAccount.cart.total = 0;
   this.accountservice.updateAccount(this.localAccount).subscribe(
     (account: Account) =>  {
       this.accountservice.setOpslag('currentUser', account);
       alert('order toegevoegd aan history');
       this.router.navigate(["orderhistory"])
     }
   )

  }
}
