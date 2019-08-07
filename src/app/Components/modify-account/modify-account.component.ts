import { Component, OnInit} from '@angular/core';
import { AccountService } from '../../service/account.service';
import { Router } from '@angular/router';
import { Account } from '../../domain/account';



@Component({
  selector: 'app-modify-account',
  templateUrl: './modify-account.component.html',
  styleUrls: ['./modify-account.component.css']
})
export class ModifyAccountComponent implements OnInit {

  constructor(private accountservice: AccountService, private router: Router) {
   
  }

  ngOnInit() {
    console.log(localStorage.getOpslag('currentUser'));
    localStorage.getOpslag('currentUser');
  
  }

  changeInfo() {
    this.accountservice.updateAccount(localStorage.getOpslag('currentUser')).subscribe(
      (account: Account) => {
        localStorage.getOpslag('currentUser', account);
      }

    )
    this.router.navigate([`/account`]);
  }

}
