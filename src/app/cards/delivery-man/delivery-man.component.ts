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

  ordersArray: Array<Order> = [
    //First order
    {
      user_id: 1,
      items: [
        {
          item_id:
          {
            quantity: 4,
            name: 'fragole'
          }
        },
        {
          item_id:
          {
            quantity: 17,
            name: 'lamponi'
          }
        },
        {
          item_id:
          {
            quantity: 23,
            name: 'more'
          }
        },

      ]
    },
    //Second order
    {
      user_id: 2,
      items: [
        {
          item_id:
          {
            quantity: 13,
            name: 'mazze'
          }
        },
        {
          item_id:
          {
            quantity: 10,
            name: 'telefoni'
          }
        },
        {
          item_id:
          {
            quantity: 2,
            name: 'tappeti'
          }
        },

      ]
    },
    //Third order
    {
      user_id: 3,
      items: [
        {
          item_id:
          {
            quantity: 3,
            name: 'ceramiche'
          }
        },
        {
          item_id:
          {
            quantity: 87,
            name: 'lampioni'
          }
        },
        {
          item_id:
          {
            quantity: 12,
            name: 'zaini'
          }
        },

      ]
    },
  ]

  constructor(private utilsService: UtilsService){

  }

  ngOnInit(){
    //TODO real get
    // this.utilsService.getItems().subscribe( (response: any) => 
    // {

    // })
    this.deliveries = []

    for(let i = 0; i < this.ordersArray.length; i++){
      let delivery = new FormControl(false)
      this.deliveries.push(delivery)
    }

    console.log("Deliveries: ", this.deliveries)
  }

  checked(){
    //TODO
    //PUT method
    console.log("Checked a checkbox")
  }
}
