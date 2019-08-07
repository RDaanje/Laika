import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './Components/home/home.component';
import { AccountComponent } from './Components/account/account.component';
import { RegisterComponent } from './Components/register/register.component';
import { ModifyAccountComponent } from './Components/modify-account/modify-account.component';
import { ProductComponent } from './Components/product/product.component';
import { GameComponent } from './Components/game/game.component';
import { SignoutComponent } from './Components/signout/signout.component';
import { WalletComponent } from './Components/wallet/wallet.component';
import { ShopComponent } from './Components/shop/shop.component';
import { ShopcartComponent } from './Components/shopcart/shopcart.component';
import { ProductRegisterComponent } from './Components/product-register/product-register.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,    
    HomeComponent,    
    AccountComponent,
    ModifyAccountComponent,
    ProductComponent,
    GameComponent,
    SignoutComponent,
    WalletComponent, 
    ShopComponent, ShopcartComponent, ProductRegisterComponent

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

