import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GreetComponent } from './greet/greet.component';
import { PersonComponent } from './person/person.component';
import { ElementSelectorComponent } from './element-selector/element-selector.component';
import { AttrSelectorComponent } from './attr-selector/attr-selector.component';
import { ClassSelectorComponent } from './class-selector/class-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    GreetComponent,
    PersonComponent,
    ElementSelectorComponent,
    AttrSelectorComponent,
    ClassSelectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
