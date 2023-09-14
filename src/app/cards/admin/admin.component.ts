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
      quantity: 4,
      name: 'fragole',
      id: '1'
      }
    ,
    {
      quantity: 17,
      name: 'lamponi',
      id: '1'
    }
    ,
    {
      quantity: 23,
      name: 'more',
      id: '1'
    }
    ,
    {
      quantity: 43,
      name: 'rose',
      id: '1'
    }
    ,
    {
      quantity: 23,
      name: 'kiwi',
      id: '1'
    }
    ,
    {
      quantity: 7,
      name: 'banane',
      id: '1'
    }
    
  ]

  constructor(private utilsService: UtilsService){

  }

  ngOnInit(){
    //TODO real get
    this.itemsArray = []
    console.log("ItemsArray1: ", this.itemsArray)


    this.utilsService.getItems().subscribe((response: any) => {
    
      console.log("Response: ", response['items'][0]['id'])
   
      // for(let i = 0; i < response.length; i++){

      //   this.itemsArray.push(response['items'][i])
      // }
      this.itemsArray = response.items
      console.log("ItemsArray2: ", this.itemsArray)

      this.quantities = []

    for(let i = 0; i < this.itemsArray.length; i++){
      let quantity = new FormControl(this.itemsArray[i].quantity)
      this.quantities.push(quantity)
    }

    console.log("Quantities: ", this.quantities)
    })
 

    
  }

  update(){
    // TODO
    // subscribe to updateItems
    let updatedItemsArray: Array<Item> = []
    for(let i = 0; i < this.itemsArray.length; i++){
      updatedItemsArray.push({
        
          quantity: this.quantities[i].getRawValue(),
          name: this.itemsArray[i].name,
          id: this.itemsArray[i].id
        
      })
    }
    let superItemsJson = {"items": updatedItemsArray}
    console.log("Updated items: ", superItemsJson)
    this.utilsService.updateItems(superItemsJson).subscribe((response: any) => {})
      // this.utilsService.getItems().subscribe((response: any) => { 
      //   console.log("Response: ", response)
      // })
  }
}
