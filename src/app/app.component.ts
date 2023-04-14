import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CardComponent } from './cards/card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Food_Delivery_Application';
  customerModal = false;
  adminModal = false;
  deliveryManModal = false;
  UsersList = [
    "Customer",
    "Admin",
    "Delivery man"
  ]

}
