import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Item, Order } from 'src/app/shared/orderInterface';
import { UtilsService } from 'src/app/utils.service';
// import { Item } from '../../../shared/itemsInterface';

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
      console.log("Items: ", this.items)
    });
  }

  submit(){
    var canSubmit = true;
    for(let i = 0; i < this.quantities.length; i++){
      if(this.quantities[i].getRawValue() > this.items[i].quantity){
        canSubmit = false
      }
    }
    // console.log("Quantities: ", this.items)
    if(canSubmit){
      let itemsSelected: Array<Item> = []

      for(let i = 0; i < this.quantities.length; i++){
        itemsSelected.push({
          
            quantity: this.quantities[i].getRawValue(),
            name: this.items[i].name,
            id: this.items[i].id,
        })
      }

      // let superItemsJson = {"items": itemsSelected }
    console.log("Item Component customer: ", this.actualCustomer)
      let order: Order = {
        user_id: this.actualCustomer.id,
        items: itemsSelected,
        id: "cippalippa",
        status: "pending"
      }

      console.log("Order: ", order)
    // }
      let superOrderJson = {"order": order}
    //   //TODO
    //   //Subscribe del new order a servizio attivo
      this.utilsService.newOrder(superOrderJson).subscribe((response: any) => {
        console.log("Response: ", response)
      })
    }
  }

  clear(){
    for(let i = 0; i < this.quantities.length; i++){
      this.quantities[i].setValue(0);
    }
  }
}
