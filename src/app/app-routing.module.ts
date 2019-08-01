import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModifyAccountComponent } from './modify-account/modify-account.component';
import { AccountComponent } from './account/account.component';


const routes: Routes = [
  { path: "", redirectTo: "account", pathMatch: "full" },
  { path: "account", component: AccountComponent},
  { path: "modify-account", component: ModifyAccountComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
