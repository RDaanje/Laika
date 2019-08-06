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
}
