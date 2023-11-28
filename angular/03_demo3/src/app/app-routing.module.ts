import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServersComponent } from './servers/servers.component';
import { ButtonCountPageComponent } from './button-count-page/button-count-page.component';
import { AngularBasicComponent } from './angular-basic/angular-basic.component';
import { ServerPageComponent } from './server-page/server-page.component';

const routes: Routes = [
  {path:'servers', component:ServerPageComponent},
  {path:'counter', component:ButtonCountPageComponent},
  {path:'basic', component:AngularBasicComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
