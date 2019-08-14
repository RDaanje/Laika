import { Component, OnInit, Input } from '@angular/core';
import { Account } from 'src/app/domain/account';
import { AccountService } from 'src/app/service/account.service';

// import { setInterval, clearInterval } from 'timers';



//Let op: werkt (nog) niet!

///#region Method which is defined in the JS file.
declare function startGame();
//#endregion

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {


  localAccount: Account = new Account();
  public score; 
  endGame: boolean = false;
  constructor(private accountservice: AccountService) {
    this.localAccount = this.accountservice.getOpslag('currentUser');
   }

  ngOnInit() { 
  
    
  }
  
playGame()  {
  
  startGame();
  const timer = setInterval( () => {
    let boolVal = ((document.getElementById('end').innerHTML) =="true")
    this.endGame = boolVal;
    if(this.endGame)  {
      this.score = document.getElementById('div1').innerHTML;
      console.log(this.score);
      clearInterval(timer);
      this.addCoins(this.score);
      alert(' Gefeliciteerd! Je hebt '+ this.score +' coins verdient!');
    }
   
    }, 100);
 
}

addCoins(coins: number) {
  console.log('check: '+this.localAccount.wallet.coins);
  this.localAccount.wallet.coins = coins;
  console.log('check: '+this.localAccount.wallet.coins); 

  this.accountservice.addCoins(this.localAccount).subscribe(
    (account: Account) => {
      this.accountservice.setOpslag('currentUser', account);
      console.log(this.accountservice.getOpslag('currentUser'));
    }
  )   
}

}


