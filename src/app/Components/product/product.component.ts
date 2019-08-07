import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/domain/product';
import { ProductService } from 'src/app/service/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private products : Product[] ;
  private product = new Product();

  constructor(private productService: ProductService) { }

  ngOnInit() {

    this.productService.retrieveAll().subscribe(
      (products: Product[]) => 
      {
   
        this.products = products;

      }

    )

  }



}
