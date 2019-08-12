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
  this.productStorage.name = nameProduct;
  this.productservice.retrieveOneByName(this.productStorage).subscribe(
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
      products.forEach((product: any) => this.products.push(product));
      (<HTMLSelectElement>document.getElementById('products')).options.length  = 0;
      for(let product of this.products) {
      var textnode = document.createElement("OPTION");  
      textnode.innerHTML = product.name;
      textnode.setAttribute("value", product.name);
      document.getElementById("products").appendChild(textnode);     
      }          
  }, () => {},
  () => { }
  )

}

getOptionValue()  {
  var e = document.getElementById("products");
  var strOption = (<HTMLSelectElement>e).options[(<HTMLSelectElement>e).selectedIndex].value;
  this.retrieveOneProduct(strOption);
}

get ProductName() { return this.registerForm.get('ProductName'); }
get Supplier() { return this.registerForm.get('Supplier'); }
get Stock() { return this.registerForm.get('Stock'); }
}




