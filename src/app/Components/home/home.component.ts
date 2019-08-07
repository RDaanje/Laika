import { Component, OnInit } from '@angular/core';
import { Account } from '../../domain/account';
import { AccountService } from '../../service/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public show: boolean = false;
  lokaalVar: Account = new Account();

  constructor(
    public accountservice: AccountService,
    private router: Router) { 

      if (this.accountservice.currentUserValue) { 
        this.router.navigate(['/account']);

    }
    }

  ngOnInit() {
    
      this.accountservice.getOpslag('currentUser');
    
    

  }

  checkAccount(usernameInput: string, passwordInput: string) {
   
    this.lokaalVar.username = usernameInput;
  
    this.lokaalVar.password = passwordInput;

    if (usernameInput != "" && passwordInput != "") {
      this.accountservice.checkAccount(this.lokaalVar).subscribe(
        (account: Account) => {
          this.accountservice.setOpslag('currentUser', account);
          this.accountservice.currentUserSubject.next(account);
        },
        () =>
          alert("The username and/or password you provided are unknown to us"),
        () => {         
          this.router.navigate(['account']);          
        }
        
      )
      // console.log('controle: ' + this.accountservice.getOpslag('currentUser'));
      // console.log('controle: ' + this.accountservice.getOpslag('currentUser').username);
      // console.log('controle: ' + this.accountservice.getOpslag('currentUser').password);
    }
    else {
      alert("The username and/or password you provided are unknown to us")
    }

  }


  forgotInfo(emailInput: string) {
    this.accountservice.getOpslag('currentUser').email = emailInput;    
    this.accountservice.forgotInfo(this.accountservice.getOpslag('currentUser')).subscribe(
      (account: Account) => {
        this.accountservice.getOpslag('currentUser').password = account.password;
        this.accountservice.getOpslag('currentUser').username = account.username;
      },
            
      () =>
        alert('This E-mail is unknown to us'),
      () => {
        alert('Your username is: ' + this.accountservice.getOpslag('currentUser').username +'\n'+ 'Your password is: ' + this.accountservice.getOpslag('currentUser').password);

      }
       
    )

  }

  goRegisterPage() {
    this.router.navigate(["register"])
  }

  revealInput() {
    this.show = !this.show;
  }
}

