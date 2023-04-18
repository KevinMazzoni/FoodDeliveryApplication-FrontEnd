import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CustomerPageComponent } from './cards/customer/customer-page/customer-page.component';

const routes: Routes = [
  { path: 'homepage', component: AppComponent },
  { path: 'customer-page', component: CustomerPageComponent },
  // { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: '**', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
