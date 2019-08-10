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

  localAccount: Account = new Account();

  constructor(private accountservice: AccountService, private router: Router) {
   this.localAccount = this.accountservice.getOpslag('currentUser');
  }

  ngOnInit() {
  
  }

  changeInfo() {
    this.accountservice.updateAccount(this.localAccount).subscribe(
      (account: Account) => {       
        console.log(this.accountservice.getOpslag('currentUser'));
        this.accountservice.setOpslag('currentUser', account);
      }
    )
    this.router.navigate([`/account`]);
  }

}
