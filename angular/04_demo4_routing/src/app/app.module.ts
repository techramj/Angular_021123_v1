import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmpComponent } from './emp/emp.component';
import { QueryExampleComponent } from './query-example/query-example.component';
import { GreetComponent } from './greet/greet.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FarewellComponent } from './farewell/farewell.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    EmpComponent,
    QueryExampleComponent,
    GreetComponent,
    HomeComponent,
    LoginComponent,
    FarewellComponent,
    LifecycleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
