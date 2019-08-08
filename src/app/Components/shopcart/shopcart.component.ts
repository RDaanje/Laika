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

  constructor(private accountservice: AccountService,
    private productservice: ProductService,
    private product: Product) { }

  ngOnInit() {
    
  }

  addProductToCart(product: Product) {
      this.accountservice.accountOpslag.cart.addProduct(product);
}
deleteProductFromCart(product){
  this.productservice.deleteProduct(product).subscribe(
    () =>{},
    () => {alert('er gaat iets mis')},
    () => {alert('product verwijderen')},
  );
}
}