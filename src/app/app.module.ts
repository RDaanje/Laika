import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {OrderModule} from 'ngx-order-pipe'
 
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './Components/home/home.component';
import { AccountComponent } from './Components/account/account.component';
import { RegisterComponent } from './Components/register/register.component';
import { ModifyAccountComponent } from './Components/modify-account/modify-account.component';
import { ProductComponent } from './Components/product/product.component';
import { GameComponent } from './Components/game/game.component';
import { ShopComponent } from './Components/shop/shop.component';
import { ShopcartComponent } from './Components/shopcart/shopcart.component';
import { ProductRegisterComponent } from './Components/product-register/product-register.component';
import { AdminDashboardComponent } from './Components/admin-dashboard/admin-dashboard.component';
import { OverviewAccountsComponent } from './Components/overview-accounts/overview-accounts.component';
import { OrdersComponent } from './Components/orders/orders.component';
import { HeaderComponent } from './Components/header/header.component';
import { MenuComponent } from './Components/menu/menu.component';
import { AccounthistoryComponent } from './Components/accounthistory/accounthistory.component';
import { OrderCoinsComponent } from './Components/order-coins/order-coins.component';





@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,    
    HomeComponent,    
    AccountComponent,
    ModifyAccountComponent,
    ProductComponent,
    GameComponent,
    ShopComponent, 
    ShopcartComponent, 
    ProductRegisterComponent, 
    AdminDashboardComponent, 
    OverviewAccountsComponent, 
    OrdersComponent, 
    HeaderComponent, 
    MenuComponent,
    OverviewAccountsComponent, 
    OrdersComponent, 
    AccounthistoryComponent, 
    OrderCoinsComponent
    OverviewAccountsComponent, 
    OrdersComponent, 
    AccounthistoryComponent, 
    OrderCoinsComponent


    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    MDBBootstrapModule,
    OrderModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

