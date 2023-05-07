import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Order } from 'src/app/shared/orderInterface';
import { UtilsService } from 'src/app/utils.service';
import { Item } from '../../../shared/itemsInterface';

@Component({
  selector: 'items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {
  items: Array<Item> = []
  quantities: Array<FormControl> = [];

  @Input() actualCustomer: any

  constructor(private utilsService: UtilsService){

  }

  ngOnInit(){
    this.quantities = []
  
    this.utilsService.getItems().subscribe((response: any) => {
      this.items = response.items
      for(let i = 0; i < this.items.length; i++){
        let quantity = new FormControl(0)
        this.quantities.push(quantity)
      }
    });
  }

  submit(){
    var canSubmit = true;
    for(let i = 0; i < this.quantities.length; i++){
      if(this.quantities[i].getRawValue() > this.items[i].item_id.quantity){
        canSubmit = false
      }
    }
    if(canSubmit){
      let itemsSelected: Array<Item> = []

      for(let i = 0; i < this.quantities.length; i++){
        itemsSelected.push({
          item_id:
          {
            quantity: this.quantities[i].getRawValue(),
            name: this.items[i].item_id.name
          }
        })
      }
      
      let order: Order = {
        user_id: this.actualCustomer.customer_id,
        items: itemsSelected
      }

      //TODO
      //Subscribe del new order a servizio attivo
      this.utilsService.newOrder(order)
    }
  }

  clear(){
    for(let i = 0; i < this.quantities.length; i++){
      this.quantities[i].setValue(0);
    }
  }
}
