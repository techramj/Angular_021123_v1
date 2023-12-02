import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmpComponent } from './emp/emp.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GreetComponent } from './greet/greet.component';
import { QueryExampleComponent } from './query-example/query-example.component';
import { FarewellComponent } from './farewell/farewell.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'home', component:HomeComponent},
  {path:'emp', component:EmpComponent},
  {path:'greet/:nickname', component:GreetComponent},
  {path:'query', component:QueryExampleComponent},
  {path:'farewell', component:FarewellComponent},
  {path:'lifecycle', component:LifecycleComponent},
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
