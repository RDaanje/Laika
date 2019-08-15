import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/service/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private accountservice: AccountService, private router: Router) { }

  ngOnInit() {
  }

  logOut()  { 
    console.log( 'logging out');    
    this.accountservice.logOut();
    this.router.navigate(['/home']);
  }

}
