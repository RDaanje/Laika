import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { Product } from 'src/app/domain/product';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/service/account.service';
import { Account } from '../../domain/account';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  private products : Product[] ;
  private product = new Product();
  private router: Router;

  accountInvoer = this.accountservice.accountOpslag;

  constructor(private productservice: ProductService, private accountservice: AccountService) { }

  ngOnInit() {
    this.productservice.retrieveAll().subscribe(
      (products: Product[]) => 
      {
   
        this.products = products;

      }
    )
    }

    show(){
      this.accountservice.accountOpslag.cart.productArray;
    }

    addToCart(productInvoer: Product){
      console.log(productInvoer);  
      this.accountservice.addToCart(productInvoer,this.accountInvoer).subscribe(

        (account: Account) =>
        {
          this.accountservice.accountOpslag = account;
        }
      )
    }


  
  }
