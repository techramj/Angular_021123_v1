import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GreetComponent } from './greet/greet.component';
import { PersonComponent } from './person/person.component';
import { ElementSelectorComponent } from './element-selector/element-selector.component';
import { AttrSelectorComponent } from './attr-selector/attr-selector.component';
import { ClassSelectorComponent } from './class-selector/class-selector.component';
import { PeopleComponent } from './people/people.component';
import { Person1Component } from './person1/person1.component';
import { People1Component } from './people1/people1.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GreetComponent,
    PersonComponent,
    ElementSelectorComponent,
    AttrSelectorComponent,
    ClassSelectorComponent,
    PeopleComponent,
    Person1Component,
    People1Component
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
