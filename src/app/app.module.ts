import { Component, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './cards/card.component';
import { CustomerCardComponent } from './cards/customer/customer-card/customer-card.component';
import { CustomerComponent } from './cards/customer/customer.component';
import { UtilsService } from './utils.service';
import { CustomerPageComponent } from './cards/customer/customer-page/customer-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CustomerComponent,
    CustomerCardComponent,
    CustomerPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UtilsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
