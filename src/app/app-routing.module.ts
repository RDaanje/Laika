import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './Components/register/register.component';
import { ModifyAccountComponent } from './Components/modify-account/modify-account.component';
import { HomeComponent } from './Components/home/home.component';
import { AccountComponent } from './Components/account/account.component';
import { ProductComponent } from './Components/product/product.component';
import { GameComponent } from './Components/game/game.component';
import { SignoutComponent } from './Components/signout/signout.component';
import { WalletComponent } from './Components/wallet/wallet.component';
import { ShopComponent } from './Components/shop/shop.component';
import { ShopcartComponent } from './Components/shopcart/shopcart.component';
import { ProductRegisterComponent } from './Components/product-register/product-register.component';
import { AuthguardComponent } from './service/authguard.service';
import { AdminDashboardComponent } from './Components/admin-dashboard/admin-dashboard.component';
import { OverviewAccountsComponent } from './Components/overview-accounts/overview-accounts.component';
import { OrdersComponent } from './Components/orders/orders.component';
import { MenuComponent } from './Components/menu/menu.component';


const routes: Routes = [
  // {path: "", redirectTo: "home", pathMatch: "full"},
  { path: '', component: HomeComponent, canActivate: [AuthguardComponent] },
  { path: "home", component: HomeComponent },


  { path: "account", component: AccountComponent, canActivate: [AuthguardComponent]},
  { path: "admin",  canActivate: [AuthguardComponent], children: [
    {  path:'',     
       canActivateChild: [AuthguardComponent],
       children: [
         { path: "product-register", component: ProductRegisterComponent },
         { path: "adminpage", component: AdminDashboardComponent},
         { path: "overview-accounts", component: OverviewAccountsComponent},
         { path: "orders", component: OrdersComponent}
       ]       
     }
   ]},
  { path: "register", component: RegisterComponent },
  { path: "wallet", component: WalletComponent, canActivate: [AuthguardComponent] },
  { path: "modify-account", component: ModifyAccountComponent, canActivate: [AuthguardComponent] },  
  { path: "game", component: GameComponent, canActivate: [AuthguardComponent] },
  { path: "shopcart", component: ShopcartComponent, canActivate: [AuthguardComponent] },
  { path: "menu", component: MenuComponent, canActivate: [AuthguardComponent] },

  { path: "product", component: ProductComponent, canActivate: [AuthguardComponent] },  
  { path: "logout", component: SignoutComponent },
  { path: "shop", component: ShopComponent, canActivate: [AuthguardComponent] },
  // {path: "product-register", component: ProductRegisterComponent, canActivate:[AuthguardComponent]},

  { path: "**", redirectTo: 'home' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'}) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
