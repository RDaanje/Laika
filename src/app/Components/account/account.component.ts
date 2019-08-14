import { Component, OnInit} from '@angular/core';
import { Account } from '../../domain/account';
import { AccountService } from '../../service/account.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router} from '@angular/router'


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  accounts: Account[];  
  euroForm;
  localAccount: Account = new Account();

  constructor(public accountservice: AccountService, private router: Router, private formBuilder: FormBuilder) {  
    this.localAccount = this.accountservice.getOpslag('currentUser');
  }
  

  ngOnInit() {  
    this.euroForm = this.formBuilder.group({
      euro: new FormControl('', [Validators.required]),
      coins: new FormControl('')
    })    
  }

  addEuro(euro: number) {
    console.log('check: '+this.localAccount.wallet.euro);
    this.localAccount.wallet.euro = euro;
    console.log('check: '+this.localAccount.wallet.euro);    
  }

  goToChangeAccount() {
    this.router.navigate(['/modify-account']);
  } 

  goToGame()  {
    this.router.navigate(['/game']);
  }
  
  validateForm() {
    var a = this.euroForm.get('euro').value;

    if (a <= 0) {
      alert('please add a valid number')
      return false;
    }
    this.addEuro(a);
    console.log(this.accountservice.getOpslag('currentUser'));
    this.accountservice.addMoney(this.localAccount).subscribe(
      (account: Account) => {
        this.accountservice.setOpslag('currentUser', account);
        console.log(this.accountservice.getOpslag('currentUser'));
      }
    )
  }

}
