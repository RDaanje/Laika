import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './Components/register/register.component';
import { ModifyAccountComponent } from './Components/modify-account/modify-account.component';
import { HomeComponent } from './Components/home/home.component';
import { AccountComponent } from './Components/account/account.component';
import { ProductComponent } from './Components/product/product.component';
import { GameComponent } from './Components/game/game.component';
import { ShopComponent } from './Components/shop/shop.component';
import { ShopcartComponent } from './Components/shopcart/shopcart.component';
import { ProductRegisterComponent } from './Components/product-register/product-register.component';
import { AuthguardComponent } from './service/authguard.service';
import { AdminDashboardComponent } from './Components/admin-dashboard/admin-dashboard.component';
import { OverviewAccountsComponent } from './Components/overview-accounts/overview-accounts.component';
import { OrdersComponent } from './Components/orders/orders.component';
import { AccounthistoryComponent } from './Components/accounthistory/accounthistory.component';


const routes: Routes = [
  // {path: "", redirectTo: "home", pathMatch: "full"},
  { path: '', component: HomeComponent},
  { path: "home", component: HomeComponent },


  { path: "account", component: AccountComponent, canActivate: [AuthguardComponent]},
  { path: "orderhistory", component: AccounthistoryComponent, canActivate: [AuthguardComponent]},
  { path: "orders", component: OrdersComponent, canActivate: [AuthguardComponent]},
  { path: "admin",  canActivate: [AuthguardComponent], children: [
    {  path:'',     
       canActivateChild: [AuthguardComponent],
       children: [
         { path: "product-register", component: ProductRegisterComponent },
         { path: "adminpage", component: AdminDashboardComponent},
         { path: "overview-accounts", component: OverviewAccountsComponent},
         
        
       ]       
     }
   ]},
  
  { path: "register", component: RegisterComponent },
  { path: "modify-account", component: ModifyAccountComponent, canActivate: [AuthguardComponent] },  
  { path: "game", component: GameComponent, canActivate: [AuthguardComponent] },
  { path: "shopcart", component: ShopcartComponent, canActivate: [AuthguardComponent] },

  { path: "product", component: ProductComponent, canActivate: [AuthguardComponent] },   
  { path: "shop", component: ShopComponent, canActivate: [AuthguardComponent] },
  // {path: "product-register", component: ProductRegisterComponent, canActivate:[AuthguardComponent]},

  { path: "**", redirectTo: 'home' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'}) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
