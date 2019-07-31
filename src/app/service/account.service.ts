import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Account } from '../domain/account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(public http: HttpClient) { }

  public retrieveAll(): Observable<Account[]> {
    return this.http.get<Account[]>(`http://localhost:8080/api/account/get`);

  }

  public createAccount(account : Account): Observable<Account> {
    console.log(`http://localhost:8080/api/account/create`, account, this.httpOptions);
    return this.http.post<Account>(`http://localhost:8080/api/account/create`, account, this.httpOptions);
  }

}

