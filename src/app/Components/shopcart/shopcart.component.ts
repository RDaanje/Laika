import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/service/account.service';
import { Product } from 'src/app/domain/product';

@Component({
  selector: 'app-shopcart',
  templateUrl: './shopcart.component.html',
  styleUrls: ['./shopcart.component.css']
})
export class ShopcartComponent implements OnInit {

  constructor(private accountservice: AccountService) { }

  ngOnInit() {
  }

  addProductToCart(product: Product) {
      this.accountservice.accountOpslag.cart.addProduct(product)
}
}