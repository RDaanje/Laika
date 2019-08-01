import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { RegisterComponent } from './register/register.component';
import { ModifyAccountComponent } from './modify-account/modify-account.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,    
    HomeComponent,    
    AccountComponent,
    ModifyAccountComponent       

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
