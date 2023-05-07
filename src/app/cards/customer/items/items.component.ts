import { Component } from '@angular/core';
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

  constructor(private utilsService: UtilsService){

  }

  ngOnInit(){
    this.quantities = []
  
    this.utilsService.getItems().subscribe((response: any) => {
      // console.log("Items: ", response)
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
      // let order = {
      //   user_id: 0,
      //   items: 
      //   {
      //     item_id: 
      //     {
      //       quantity: number,
      //       name: string
      //     }
      //   }
      // }
      // this.utilsService.newOrder()
    }
  }

  //RIPARTIRE DA QUI
  clear(){
    for(let i = 0; i < this.quantities.length; i++){
      this.quantities[i].setValue(0);
    }
  }
}
