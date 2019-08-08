import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Product } from 'src/app/domain/product';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-product-register',
  templateUrl: './product-register.component.html',
  styleUrls: ['./product-register.component.css']
})
export class ProductRegisterComponent implements OnInit {

registerForm;
productStorage: Product = new Product();

constructor(public productservice: ProductService, 
  private router: Router, 
  private formBuilder: FormBuilder) {

}

ngOnInit() {
  this.registerForm = this.formBuilder.group({
    ProductName: new FormControl('', Validators.required),
    Supplier: new FormControl('', Validators.required),
    Stock: new FormControl('', Validators.required)
  })



}

createProduct(ProductName: string, Supplier: string, Stock: number) {
  this.productStorage.setName(ProductName);
  this.productStorage.setSupplier(Supplier);
  this.productStorage.setStock(Stock);


  this.productservice.createProduct(this.productStorage).subscribe(
    (productvandatabase: Product) => 
    this.productStorage = productvandatabase,
    (error: HttpErrorResponse) => { 
      if (error.status == 409){         
        alert(`This name is already in the shop!`);
      } else if (error.status == 302) {
        alert(`Wat moet ik hiermee doen?`);
      }
    },         
    () =>
      this.router.navigate(['shop'])
  )    
}

validateForm() {
  var a = this.registerForm.get('ProductName').value;
  var b = this.registerForm.get('Supplier').value;
  var c = this.registerForm.get('Stock').value;

  if (a == "") {
    alert("ProductName must be filled out");
    return false;
  } 
  if (b == "") {
    alert("Supplier must be filled out");
    return false;
  }
  if (c == "") {
    alert("Stock must be filled out");
    return false;
  }

  this.createProduct(this.registerForm.get('ProductName').value, this.registerForm.get('Supplier').value, this.registerForm.get('Stock').value)
  
}

get ProductName() { return this.registerForm.get('ProductName'); }
get Supplier() { return this.registerForm.get('Supplier'); }
get Stock() { return this.registerForm.get('Stock'); }
}

