import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { AccountComponent } from './account/account.component';
import { LoggingService } from './shared/logging.service';
import { Observable1Component } from './observable/observable1/observable1.component';
import { Observable2Component } from './observable/observable2/observable2.component';
import { Observable3Component } from './observable/observable3/observable3.component';
import { Promise1Component } from './promise/promise1/promise1.component';
import { Promise2Component } from './promise/promise2/promise2.component';
import { Observable4Component } from './observable/observable4/observable4.component';
import { EmpCreateComponent } from './emp-create/emp-create.component';
import { EmpEditComponent } from './emp-edit/emp-edit.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    Dashboard1Component,
    Dashboard2Component,
    HeaderComponent,
    PageNotFoundComponent,
    ServerComponent,
    ServersComponent,
    AccountComponent,
    Observable1Component,
    Observable2Component,
    Observable3Component,
    Promise1Component,
    Promise2Component,
    Observable4Component,
    EmpCreateComponent,
    EmpEditComponent,
    EmpListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
