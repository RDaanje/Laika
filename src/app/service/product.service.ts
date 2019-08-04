import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../domain/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  public retrieveAll(): Observable<Product[]> {
    return this.http.get<Product[]>(`http://localhost:8080/api/product/get`);
  }
}
