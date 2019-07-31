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
    // console.log(this.http.get<Account>(`http://localhost:8080/api/account/1`));
    return this.http.get<Account[]>(`http://localhost:8080/api/account/get`);
  }

  public setAccount(account: Account): Observable<Account>{
    return this.http.post<Account>(`http://localhost:8080/api/account/create`, account, this.httpOptions);
  }

}

