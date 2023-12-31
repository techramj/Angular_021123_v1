import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularBasicComponent } from './angular-basic/angular-basic.component';
import { FormsModule } from '@angular/forms';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './server/server.component';
import { ButtonCountComponent } from './button-count/button-count.component';
import { ButtonCountPageComponent } from './button-count-page/button-count-page.component';
import { ButtonMessageComponent } from './button-message/button-message.component';
import { ServerPageComponent } from './server-page/server-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularBasicComponent,
    ServersComponent,
    ServerComponent,
    ButtonCountComponent,
    ButtonCountPageComponent,
    ButtonMessageComponent,
    ServerPageComponent,
    HeaderComponent,
    FooterComponent
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
