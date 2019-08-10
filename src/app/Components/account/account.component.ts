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


}
