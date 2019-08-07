import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/service/account.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Account } from 'src/app/domain/account';


@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

  euroForm;
  localAccount: Account = new Account();

  constructor(private accountservice: AccountService,
    private formBuilder: FormBuilder) {
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


