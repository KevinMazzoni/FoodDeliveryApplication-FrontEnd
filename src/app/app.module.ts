import { Component, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './cards/card.component';
import { CustomerCardComponent } from './cards/customer/customer-card/customer-card.component';
import { CustomerComponent } from './cards/customer/customer.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CustomerComponent,
    CustomerCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
