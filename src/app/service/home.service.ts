import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Home } from '../domain/home';
import { Account } from '../domain/account';


@Injectable({
  providedIn: 'root'
})
export class HomeService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(public http: HttpClient) { }

  public retrieveAll(): Observable<Account[]> {
    return this.http.get<Account[]>(`http://localhost:8080/api/account/get`);
  }
  public checkAccount(account : Account): Observable<Account> {
    return this.http.get<Account>(`http://localhost:8080/api/account/get/${account.username}/${account.password}`);
  }

}
