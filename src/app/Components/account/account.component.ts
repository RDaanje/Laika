import { Component, OnInit} from '@angular/core';
import { Account } from '../../domain/account';
import { AccountService } from '../../service/account.service';
import { Router} from '@angular/router'


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  accounts: Account[];  

  constructor(public accountservice: AccountService, private router: Router) { 
   
  }

  ngOnInit() {  
    
  }

  goToChangeAccount() {
    this.router.navigate(['/modify-account']);

  } 

  goToGame()  {
    this.router.navigate(['/game']);
  }

  viewAccount() {
    this.accountservice.retrieveAll().subscribe(
      (accounts: Account[]) => 
      {
   
        this.accounts = accounts;

      }

    )
  }


  getAccount() {
    this.accountservice.retrieveOne(this.accountservice.getOpslag('currentUser')).subscribe(
      (account: Account) => {
        this.accountservice.setOpslag('currentUser', account);
        this.accountservice.accountOpslag =  this.accountservice.getOpslag('currentUser');
        console.log(account);
      }
    )
  }

  updateEmail() {    

    this.accountservice.changeEmail(this.accountservice.getOpslag('currentUser')).subscribe(
      (account: Account) => {
      this.accountservice.setOpslag('currentUser', account);
      console.log(account);
      
      }
    )
  }

 

}
