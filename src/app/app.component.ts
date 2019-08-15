import { Component } from '@angular/core';
import { AccountService } from './service/account.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Laika';  
  currentUser: any;
  username: string;



  constructor(private accountservice: AccountService, private router: Router) {
    this.accountservice.currentUser.subscribe(x => this.currentUser = x);
  }
  
  goToAccount() {
    if (this.accountservice.accountOpslag.isAdmin)  {
      this.router.navigate(['/admin/adminpage']);
    } else  {
      this.router.navigate(['/account']);
    }

  }
  
  adminCheck(): boolean {
    if(this.accountservice.getOpslag('currentUser') != null)
     if(this.accountservice.getOpslag('currentUser').isAdmin)  {
       return true;
     }  else  {
       return false;
     }
  }
}


