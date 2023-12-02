import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { ServerComponent } from './server/server.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ServersComponent } from './servers/servers.component';
import { AccountComponent } from './account/account.component';

const routes: Routes = [
  {path:'dashboard1', component:Dashboard1Component},
  {path:'dashboard2', component:Dashboard2Component},
  {path:'servers', component:ServersComponent},
  {path:'account', component:AccountComponent},
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
