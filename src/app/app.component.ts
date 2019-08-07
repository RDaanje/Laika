import { Component } from '@angular/core';
import { AccountService } from './service/account.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Laika';  
  
  constructor(private accountservice: AccountService) {
  
  }

signedIn()  {
    return this.accountservice.signedIn;
  }
}


