import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { Product } from 'src/app/domain/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  private products : Product[] ;
  private product = new Product();
  private router: Router;

  constructor(private productservice: ProductService) { }

  ngOnInit() {
    this.productservice.retrieveAll().subscribe(
      (products: Product[]) => 
      {
   
        this.products = products;

      }
    )
    }
  
  }
