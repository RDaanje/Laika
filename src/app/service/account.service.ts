import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable} from 'rxjs';
import { Account } from '../domain/account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  localStorage
  public accountOpslag: Account = new Account();
  // @localStorage accounts: Account = new Account();
  public signedIn : boolean = false;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(public http: HttpClient) { }

  set(key: string, data: any): void {
    console.log('in set account');

    try {
      console.log('in localstorage')
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error('Error saving to localStorage', e);
    }
  }
  
  get(key: string) {
    try {
      console.log('from localstorage')
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
    this.set(account.username, account);
    console.log(this.get(account.username)+ 'opgeslagen');
    return this.http.get<Account>(`http://localhost:8080/api/account/get/${account.username}/${account.password}`);
  }

  public forgotInfo(account: Account): Observable<Account> {
    return this.http.get<Account>(`http://localhost:8080/api/account/forgot/${account.email}`);
  }

  public retrieveOne(account: Account): Observable<Account> {
    return this.http.get<Account>(`http://localhost:8080/api/account/${account.id}`);

  }

  public createAccount(account: Account): Observable<Account> {
    console.log('')
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
    return this.http.put<Account>(`http://localhost:8080/api/account/${account.id}/wallet/${account.euro}`, account, this.httpOptions);
  }

  
}
