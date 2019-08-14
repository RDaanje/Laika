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
hiddenInput: boolean = false;
products: Product[];
productsA: Product[];

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
  this.fillDropdown();
  this.toShowInAdmin();



}

createProduct(ProductName: string, Supplier: string, Stock: number) {
  this.productStorage.name = ProductName;
  this.productStorage.supplier = Supplier;
  this.productStorage.stock = Stock;


  this.productservice.createProduct(this.productStorage).subscribe(
    (productvandatabase: Product) => 
    this.productStorage = productvandatabase,
    (error: HttpErrorResponse) => { 
      if (error.status == 409){         
        alert(`This name is already in the shop!`);
      } else if (error.status == 302) {
        alert(`Wat moet ik hiermee doen?`);
      } else if (error.status == 500) {
        alert('this name is already in the shop!')
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

retrieveOneProduct(nameProduct: string): any {
  this.productStorage = new Product();
  this.productStorage.id = +nameProduct;
  console.log(this.productStorage);
  this.productservice.retrieveOne(this.productStorage).subscribe(
    (product: Product)  =>  {
      this.productStorage = product;
      this.hiddenInput = true;
    },()  =>  {},
    ()  =>  {
    }
  )
  // return true;
}

changeInfo() {
  console.log(this.productStorage); 
  this.productservice.updateProduct(this.productStorage).subscribe(
    (product: Product) => {       
      console.log(this.productStorage);     
    }

  )
}

deleteProduct() {
  this.productservice.deleteProduct(this.productStorage).subscribe(
    (product: Product) => {       
      this.hiddenInput = false;
      console.log('check'+ this.productStorage);   
      this.fillDropdown();
      alert('deleted from database: '+ this.productStorage.name + ' id: '+ this.productStorage.id);    
    }
  )
}

fillDropdown()  {
  this.products = [];
  console.log(this.products)
  this.productservice.retrieveAll().subscribe(
    (products: Product[]) => 
    {       
      this.products = products;
      this.toShowInAdmin();
      console.log(this.productsA);

      this.productsA.forEach((product: any) => this.products.push(product));
      (<HTMLSelectElement>document.getElementById('products')).options.length  = 0;
      for(let product of this.productsA) {
      var textnode = document.createElement("OPTION");  
      textnode.innerHTML = product.name;
      textnode.setAttribute("value", product.id.toString());
      document.getElementById("products").appendChild(textnode);     
      }
      console.log( this.productStorage.name);          
  }, () => {},
  () => { }
  )

}

getOptionValue()  {
  var e = document.getElementById("products");
  var strOption = (<HTMLSelectElement>e).options[(<HTMLSelectElement>e).selectedIndex].value;
  this.retrieveOneProduct(strOption);
}

toShowInAdmin() {
  
    this.productsA = [];
    for (let entry of this.products) {
      ;
      console.log(this.productsA.length);
      if (this.productsA.length == 0) {


        this.productsA.push(entry);
      } else {
        var geenNaamGevonden = true;
        for (let entry2 of this.productsA) {

          if (entry.name === entry2.name) {
            geenNaamGevonden = false;

            break;
          }

        }
        if (geenNaamGevonden == true) {
          this.productsA.push(entry);
        }
      }
    }
  
}

get ProductName() { return this.registerForm.get('ProductName'); }
get Supplier() { return this.registerForm.get('Supplier'); }
get Stock() { return this.registerForm.get('Stock'); }
}




