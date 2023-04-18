import { Component } from '@angular/core';

@Component({
  selector: 'customer-page',
  templateUrl: './customer-page.component.html',
  styleUrls: ['./customer-page.component.css']
})
export class CustomerPageComponent {

  ngOnInit(){
    console.log("Initialized CustomerPageComponent")
  }
}
