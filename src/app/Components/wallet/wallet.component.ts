import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/service/account.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

  euroForm;

  constructor(private accountservice: AccountService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.euroForm = this.formBuilder.group({
      euro: new FormControl('',[Validators.required]),
      coins: new FormControl('')

    })
  }

  addEuro(euro: number) {
    if (this.accountservice.accountOpslag.euro >= 0)
    this.accountservice.accountOpslag.euro = this.accountservice.accountOpslag.euro + euro;
    else  {
      this.accountservice.accountOpslag.euro = euro
    }
  }

  addCoins(coins: number) {
    if (this.accountservice.accountOpslag.coins >= 0)
    this.accountservice.accountOpslag.coins = this.accountservice.accountOpslag.coins + coins;
    else  {
      this.accountservice.accountOpslag.coins = coins
    }
  }

  validateForm() {
    var a = this.euroForm.get('euro').value;
    
    if (a <= 0) {
      alert('please add a valid number')
      return false;
    } 
    this.addEuro(a);
    this.accountservice.addMoney(this.accountservice.accountOpslag).subscribe(
      
    ) 

    
     
   

      console.log( this.accountservice.accountOpslag.euro);
      console.log( this.accountservice.accountOpslag.coins);
      

  }

 
    
  }


