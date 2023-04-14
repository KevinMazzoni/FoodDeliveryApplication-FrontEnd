import { Component, EventEmitter, Output } from '@angular/core';

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

  @Output() cardChanged: EventEmitter<any> = new EventEmitter();

  UsersList = [
    "Customer",
    "Admin",
    "Delivery man"
  ]

  cardClicked(user: string){
    console.log("Card of type ", user, " clicked!");
    this.cardChanged.emit(user);
  }

  ngOnInit(){
    this.cardChanged.subscribe(response => {
      console.log("Component ", this.title, " re-initialized with value detected: ", response)
      switch(response){
        case 'Customer':
          this.customerModal = true;
          this.adminModal = false;
          this.deliveryManModal = false;
          break;
        case 'Admin':
          this.customerModal = false;
          this.adminModal = true;
          this.deliveryManModal = false;
          break;
        case 'Delivery man':
          this.customerModal = false;
          this.adminModal = false;
          this.deliveryManModal = true;
          break;
        default:
          this.customerModal = false;
          this.adminModal = false;
          this.deliveryManModal = false;
          break;
      }
    });

  }
}
