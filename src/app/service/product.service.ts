import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../domain/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public productOpslag : Product = new Product();
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  
  constructor(private http: HttpClient) { }

  public retrieveAll(): Observable<Product[]> {
    return this.http.get<Product[]>(`http://localhost:8080/api/product/get`);
  }
  
  public retrieveOne(product : Product): Observable<Product> {
    return this.http.get<Product>(`http://localhost:8080/api/product/get/${product.id}`);
    
  }

  public retrieveOneByName(product: Product): Observable<Product> {
    return this.http.get<Product>(`http://localhost:8080/api/product/get/name/${product.name}`)
  }

  public retrieveOneWithLong(longInput : Number): Observable<Product> {
    // console.log(this.http.get<Product>(`http://localhost:8080/api/product/get/${longInput}`));
    return this.http.get<Product>(`http://localhost:8080/api/product/get/${longInput}`);
    
  }

  public createProduct(product : Product): Observable<Product> {
    return this.http.post<Product>(`http://localhost:8080/api/product/create`, product, this.httpOptions);
  }

  // REMOVES PRODUCT FROM DATABASE
  public removeProduct(longInput : Number): Observable<void>{
  return this.http.delete<void>(`http://localhost:8080/api/product/delete/${longInput}`)
  }


  public updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(`http://localhost:8080/api/product/${product.id}/update`, product, this.httpOptions);
  }

  public deleteProduct(product: Product): Observable<Product> {
    return this.http.delete<Product>(`http://localhost:8080/api/product/${product.id}/delete`, this.httpOptions);
  }


}
