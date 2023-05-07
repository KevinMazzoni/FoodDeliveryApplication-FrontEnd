import { Component, EventEmitter, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Item } from 'src/app/shared/orderInterface';
import { UtilsService } from 'src/app/utils.service';

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  registrationModal = false
  quantities: Array<FormControl> = [];

  itemsArray: Array<Item> = [
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
    {
      item_id:
      {
        quantity: 43,
        name: 'rose'
      }
    },
    {
      item_id:
      {
        quantity: 23,
        name: 'kiwi'
      }
    },
    {
      item_id:
      {
        quantity: 7,
        name: 'banane'
      }
    },
  ]

  constructor(private utilsService: UtilsService){

  }

  ngOnInit(){
    //TODO real get
    // this.utilsService.getItems().subscribe( (response: any) => 
    // {

    // })
    this.quantities = []

    for(let i = 0; i < this.itemsArray.length; i++){
      let quantity = new FormControl(this.itemsArray[i].item_id.quantity)
      this.quantities.push(quantity)
    }

    console.log("Quantities: ", this.quantities)
  }

  update(){
    //TODO
    //subscribe to updateItems
    let updatedItemsArray: Array<Item> = []
    for(let i = 0; i < this.itemsArray.length; i++){
      updatedItemsArray.push({
        item_id: {
          quantity: this.quantities[i].getRawValue(),
          name: this.itemsArray[i].item_id.name
        }
      })
    }
    this.utilsService.updateItems(updatedItemsArray)
  }
}
