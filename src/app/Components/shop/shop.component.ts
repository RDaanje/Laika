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

  accountInvoer: Account = new Account();

  constructor(private productservice: ProductService, private accountservice: AccountService) { }

  ngOnInit() {
    this.accountInvoer = this.accountservice.getOpslag('currentUser');
    console.log(this.accountInvoer);
    this.productservice.retrieveAll().subscribe(
      (products: Product[]) => 
      {   
        this.products = products;
      }
    )
    }

    addToCart(productInvoer: Product){
      this.accountservice.addToCart(productInvoer,this.accountInvoer).subscribe(

        (account: Account) =>
        {
          // this.accountInvoer.cart.products.push(account.cart.product);
          this.accountservice.setOpslag('currentUser', account);
          console.log('lokaal: ' +this.accountInvoer);
          this.accountInvoer = this.accountservice.getOpslag('currentUser');
          console.log(this.accountservice.getOpslag('currentUser'));
          console.log('lokaal: ' +this.accountInvoer);
        }
      )
    } 

    
  
  }
