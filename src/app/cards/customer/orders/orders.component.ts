import { Component, Input } from '@angular/core';
import { timeout } from 'rxjs';
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
    // {
    //   user_id: 1,
    //   items: [
    //     {
    //       quantity: 4,
    //       name: 'fragole',
    //       id: '1'
    //       }
    //   ]
    // }
  ]

  constructor(private utilsService: UtilsService){

  }

  ngOnInit(){
    console.log("Entrato nell'oninit")
    //TODO
    //Metodo get reale
    this.utilsService.getCustomerOrders(this.actualCustomer.id)
      // .pipe(timeout(10000))
      
      .subscribe((response: any) => {
        console.log("Response: ", response)
        
        // this.orders = response.orders
        // get this.orders keys
        var i = 0
        for(const order in response.orders){
          console.log("orderId: ", order)
          // this.orders[i].items = []
          let items = []
          for(const item in response.orders[order].items){
            items.push(response.orders[i].items[item])
          }
          this.orders.push({
            user_id: response.orders[i].user_id,
            items: items,
            id: response.orders[i].id,
            status: response.orders[i].status
          });
          i++
        }

        console.log("Orders: ", this.orders[0])
          
        
      });
  }

}
