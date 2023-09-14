import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Item, Order } from 'src/app/shared/orderInterface';
import { UtilsService } from 'src/app/utils.service';

@Component({
  selector: 'delivery-man',
  templateUrl: './delivery-man.component.html',
  styleUrls: ['./delivery-man.component.css']
})
export class DeliveryManComponent {
  registrationModal = false
  deliveries: Array<FormControl> = [];

  ordersArray: Array<Order> = []

  constructor(private utilsService: UtilsService){

  }

  ngOnInit(){
    //TODO real get
    this.utilsService.getOrders().subscribe( (response: any) => 
    {
      console.log("Response: ", response)
      for(const order in response.orders){
        this.deliveries.push(new FormControl(false))
      }
      this.ordersArray = response.orders
      console.log("Deliveries: ", this.deliveries)
      console.log("OrdersArray: ", this.ordersArray)
      // this.ordersArray = response
    })

    // })


    // for(let i = 0; i < this.ordersArray.length; i++){
    //   let delivery = new FormControl(false)
    //   this.deliveries.push(delivery)
    // }
 
  }

  checked(){
  


    for(let i = 0; i < this.deliveries.length; i++){
      if(this.deliveries[i].value){

      console.log("Delivery ",i, " is true ")
      console.log("Order: ", this.ordersArray[i].id)
      this.utilsService.updateDelivery(this.ordersArray[i].id).subscribe((response: any) => {
        console.log("Response: ", response)
      })
    }}
    //PUT method
    // console.log("Checked a checkbox")
  }
}
