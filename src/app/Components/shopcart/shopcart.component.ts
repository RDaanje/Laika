import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/service/account.service';
import { Product } from 'src/app/domain/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-shopcart',
  templateUrl: './shopcart.component.html',
  styleUrls: ['./shopcart.component.css']
})
export class ShopcartComponent implements OnInit {

  accountInvoer = this.accountservice.accountOpslag;
  cartProduct: Product = new Product();
  productA: Product[] = [];
  methodeaangeroepen:boolean = false;

  constructor(private accountservice: AccountService, private productservice: ProductService) { }

  ngOnInit() {

    for(let entry of this.accountservice.accountOpslag.cart.productsFromCart){
      this.showCart(entry);
  }

  }

  showCart(cartLong: Number) {

    this.productservice.retrieveOneWithLong(cartLong).subscribe(

      (productvandatabase: Product) => {
      this.productA.push(productvandatabase);
      console.log(this.productA);
      }
    )
    return this.cartProduct;
  }

}