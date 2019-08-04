import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './Components/register/register.component';

import { ModifyAccountComponent } from './Components/modify-account/modify-account.component';
import { HomeComponent } from './Components/home/home.component';
import { AccountComponent } from './Components/account/account.component';
import { ProductComponent } from './Components/product/product.component';



const routes: Routes = [
{path:"", redirectTo: "home", pathMatch: "full"},
{path: "home", component: HomeComponent},    
{path:"register", component: RegisterComponent},
{path:"account", component: AccountComponent},
{path: "modify-account", component: ModifyAccountComponent },
{path: "product" , component: ProductComponent},
{path: "**", redirectTo: "home"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
