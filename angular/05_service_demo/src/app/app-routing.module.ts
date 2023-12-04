import { Observable4Component } from './observable/observable4/observable4.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { ServerComponent } from './server/server.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ServersComponent } from './servers/servers.component';
import { AccountComponent } from './account/account.component';
import { Observable1Component } from './observable/observable1/observable1.component';
import { Observable2Component } from './observable/observable2/observable2.component';
import { Observable3Component } from './observable/observable3/observable3.component';
import { Promise1Component } from './promise/promise1/promise1.component';
import { Promise2Component } from './promise/promise2/promise2.component';

const routes: Routes = [
  {path:'dashboard1', component:Dashboard1Component},
  {path:'dashboard2', component:Dashboard2Component},
  {path:'servers', component:ServersComponent},
  {path:'account', component:AccountComponent},
  {path:'observable1', component:Observable1Component},
  {path:'observable2', component:Observable2Component},
  {path:'observable3', component:Observable3Component},
  {path:'observable4', component:Observable4Component},
  {path:'promise1', component:Promise1Component},
  {path:'promise2', component:Promise2Component},
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
