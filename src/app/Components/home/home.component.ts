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

      // if (this.accountservice.currentUserValue) { 
      //   this.router.navigate(['/account']);
    // }
    }

  ngOnInit() {
    
  }

  checkAccount(usernameInput: string, passwordInput: string) {
   
    this.lokaalVar.username = usernameInput;
  
    this.lokaalVar.password = passwordInput;

    if (usernameInput != "" && passwordInput != "") {
      this.accountservice.checkAccount(this.lokaalVar).subscribe(
        (account: Account) => {
          this.accountservice.setOpslag('currentUser', account);
          this.accountservice.currentUserSubject.next(account);
          this.accountservice.accountOpslag =  this.accountservice.getOpslag('currentUser');
          console.log(this.accountservice.accountOpslag);

          this.accountservice.username();
        },
        () =>
          alert("The username and/or password you provided are unknown to us"),
        () => {         
          this.router.navigate(['account']);          
        }
        
      )
    }
    else {
      alert("The username and/or password you provided are unknown to us")
    }

  }


  forgotInfo(emailInput: string) {
    this.lokaalVar.email = emailInput;    
    this.accountservice.forgotInfo(this.lokaalVar).subscribe(
      (account: Account) => {
        this.accountservice.accountOpslag.password = account.password;
        this.accountservice.accountOpslag.username = account.username;
      },            
      () => {
        alert('This E-mail is unknown to us');
      },
      () => {
        alert('Your username is: ' + this.accountservice.accountOpslag.username +'\n'+ 'Your password is: ' + this.accountservice.accountOpslag.password);
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

