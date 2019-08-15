import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { Product } from 'src/app/domain/product';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/service/account.service';
import { Account } from '../../domain/account';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],

})


export class ShopComponent implements OnInit {
  private products: Product[];
  public productsB: Product[];
  private product = new Product();
  private router: Router;

  constructor(private productservice: ProductService, private accountservice: AccountService) { }

  ngOnInit() {
    
    this.accountservice.accountOpslag = this.accountservice.accountOpslag;
    this.productservice.retrieveAll().subscribe(
      (products: Product[]) => {
        this.products = products;
        this.toShowInShop();
        
      }
    )
  }
  toShowInShop() {
    this.productsB = [];
    for (let entry of this.products) {
      

      if (this.productsB.length == 0) {


        this.productsB.push(entry);
      } else {
        var geenNaamGevonden = true;
        for (let entry2 of this.productsB) {

          if (entry.name === entry2.name) {
            geenNaamGevonden = false;

            break;
          }

        }
        if (geenNaamGevonden == true) {
          this.productsB.push(entry);
        }
      }
    }
  }


  addToCart(productInvoer: Product) {
    this.accountservice.addToCart(productInvoer, this.accountservice.accountOpslag).subscribe(

      (account: Account) => {
        this.accountservice.setOpslag('currentUser', account);
        alert('The item has been added to your cart!');
      }
    )
  }



}
