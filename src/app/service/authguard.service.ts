import { Injectable} from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild} from '@angular/router';
import { AccountService } from 'src/app/service/account.service';


@Injectable({providedIn: 'root'})
export class AuthguardComponent implements CanActivate, CanActivateChild {

  constructor(private router: Router, private accountservice: AccountService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
    const currentUser = this.accountservice.currentUserValue;
    if (currentUser)  {
      console.log('Inlog Ok');
      return true;
    }
    this.router.navigate(['/home'], {  queryParams: { returnUrl: state.url  }});
    console.log('Inlog niet OK');
    return false;
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const admin = this.accountservice.accountOpslag.isAdmin;
    console.log('admin check:'+ admin);
  if (admin)  {
    console.log('welcome admin');
    return true;
  }
  this.router.navigate(['/account'], {  queryParams: { returnUrl: state.url  }});
  console.log('You are not an admin');
  alert('admin only');
  return false;
}

}
