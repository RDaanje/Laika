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

  // accountInvoer: Account = new Account();
  

  constructor(private productservice: ProductService, private accountservice: AccountService) { }

  ngOnInit() {
    this.accountservice.accountOpslag= this.accountservice.accountOpslag;
    // this.accountInvoer = this.accountservice.getOpslag('currentUser');
    // console.log(this.accountInvoer);
    this.productservice.retrieveAll().subscribe(
      (products: Product[]) => 
      {   
        this.products = products;
     
      }
    )
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
