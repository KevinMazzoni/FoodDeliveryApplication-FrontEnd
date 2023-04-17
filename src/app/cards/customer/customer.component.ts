import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UtilsService } from 'src/app/utils.service';
import { Customer } from './customerInterface';

@Component({
  selector: 'customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {

  @Input() name = ''

  customers: Array<Customer> = []

  constructor(private utilsService: UtilsService){}

  ngOnInit(){
    this.utilsService.getCustomers().subscribe((response: any) => {
      console.log("Customers: ", response)
      this.customers = response.customers
    });
  }

}
