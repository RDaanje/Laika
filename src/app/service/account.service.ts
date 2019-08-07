import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, BehaviorSubject} from 'rxjs';
import { Account } from '../domain/account';
import { Product } from '../domain/product';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  public currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;
  public userName: string;

  accountOpslag: Account = this.getOpslag('currentUser');

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  ngonInit()  {
    
  }

  constructor(public http: HttpClient) { 
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
    this.username();
  }

  public username() {
    if (this.getOpslag('currentUser') != null) {
      this.userName = this.getOpslag('currentUser').username;
    } else{
      this.userName = "";
    }    
  }

  public get currentUserValue() {
    return this.currentUserSubject.value;
  } 

  public logOut() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.username();
  
  }

  public setOpslag(key: string, data: any): void {
    console.log('in set account');
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error('Error saving to localStorage', e);
    }
  }
  
  public getOpslag(key: string) {
    try { 
      return JSON.parse(localStorage.getItem(key));
    } catch (e) {
      console.error('Error getting data from localStorage', e);
      return null;
    }
  }       

  public retrieveAll(): Observable<Account[]> {
    return this.http.get<Account[]>(`http://localhost:8080/api/account/get`);
  }

  public checkAccount(account: Account): Observable<Account> {
    
    return this.http.get<Account>(`http://localhost:8080/api/account/get/${account.username}/${account.password}`);
  }

  public forgotInfo(account: Account): Observable<Account> {
    return this.http.get<Account>(`http://localhost:8080/api/account/forgot/${account.email}`);
  }

  public retrieveOne(account: Account): Observable<Account> {
    return this.http.get<Account>(`http://localhost:8080/api/account/${account.id}`);
  }

  public createAccount(account: Account): Observable<Account> {
    console.log(`http://localhost:8080/api/account/create`, account, this.httpOptions);
    return this.http.post<Account>(`http://localhost:8080/api/account/create`, account, this.httpOptions);
  }

  public updateAccount(account: Account): Observable<Account> {
    return this.http.put<Account>(`http://localhost:8080/api/account/${account.id}/update`, account, this.httpOptions);
  }

  public changeEmail(account: Account): Observable<Account> {
    return this.http.put<Account>(`http://localhost:8080/api/account/${account.id}/${account.email}`, account, this.httpOptions);
  }

  public addMoney(account: Account): Observable<Account>  {
    return this.http.put<Account>(`http://localhost:8080/api/account/${account.id}/wallet/${account.wallet.euro}`, account, this.httpOptions);
  }

  public addToCart(product : Product, account : Account): Observable<Account> {
    return this.http.put<Account>(`http://localhost:8080/api/account/${account.id}/cart`, product, this.httpOptions);
  }
  
  public getItemsCart(account : Account): Observable<Product[]> {
    return this.http.get<Product[]>(`http://localhost:8080/api/account/${account.id}/cart`);
  }

}
