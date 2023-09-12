import { Component, Input } from '@angular/core';
import { Order } from 'src/app/shared/orderInterface';
import { UtilsService } from 'src/app/utils.service';

@Component({
  selector: 'orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  @Input() actualCustomer: any
  orders: Array<Order> = [
    {
      user_id: 1,
      items: [
        {
          quantity: 4,
          name: 'fragole',
          id: '1'
          }
      ]
    }
  ]

  constructor(private utilsService: UtilsService){

  }

  ngOnInit(){
    //TODO
    //Metodo get reale
    // this.utilsService.getOrders().subscribe( (response: any) => 
    //   {
    //     this.orders = response.
    //   }
    // )
    
  }

}
