import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/service/account.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.css']
})
export class SignoutComponent implements OnInit {

  constructor(
    private accountservice: AccountService,
    private router: Router) { }

  ngOnInit() {
    // this.logOut();
  }

  // logOut()  { 
  //   localStorage.removeItem('currentUser');
  //   console.log(localStorage.length);
  //   this.accountservice.currentUserSubject.next(null);
  //   this.router.navigate(['/logged-out']);
    
  // }

}
