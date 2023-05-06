import { Component } from '@angular/core';
import { UtilsService } from 'src/app/utils.service';
import { Item } from './itemsInterface';

@Component({
  selector: 'items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {
  items: Array<Item> = []

  constructor(private utilsService: UtilsService){

  }

  ngOnInit(){
    this.utilsService.getItems().subscribe((response: any) => {
      // console.log("Items: ", response)
      this.items = response.items
    });
  }
}
