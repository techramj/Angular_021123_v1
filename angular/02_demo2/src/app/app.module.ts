import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GreetComponent } from './greet/greet.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { FormsModule } from '@angular/forms';
import { ButtonCountComponent } from './button-count/button-count.component';
import { ButtonMessageComponent } from './button-message/button-message.component';
import { ButtonCountPageComponent } from './button-count-page/button-count-page.component';

@NgModule({
  declarations: [
    AppComponent,
    GreetComponent,
    ServerComponent,
    ServersComponent,
    ButtonCountComponent,
    ButtonMessageComponent,
    ButtonCountPageComponent
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
