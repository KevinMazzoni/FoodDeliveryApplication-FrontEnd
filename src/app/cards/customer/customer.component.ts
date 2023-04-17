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
  title="card"
  @Input() name = ''

  customers: Array<Customer> = [
    {
      customer_id:
      {
        name: "Jhonny",
        surname: "Stecchino",
        address: "Via Golgi, 7, 40123, Milano"
      }
    },
    {
      customer_id:
      {
        name: "Mario",
        surname: "Rossi",
        address: "Via Larga, 9, 40000, Bologna"
      }
    },
    {
      customer_id:
      {
        name: "Giovanni",
        surname: "Neri",
        address: "Via Mattei, 10, 40567, Roma"
      }
    },
    {
      customer_id:
      {
        name: "Giovanni",
        surname: "Neri",
        address: "Via Mattei, 10, 40567, Roma"
      }
    },
    {
      customer_id:
      {
        name: "Giovanni",
        surname: "Neri",
        address: "Via Mattei, 10, 40567, Roma"
      }
    },
    {
      customer_id:
      {
        name: "Giovanni",
        surname: "Neri",
        address: "Via Mattei, 10, 40567, Roma"
      }
    }
  ]
  // customers: Array<any> = [];

  constructor(private utilsService: UtilsService){

  }

  ngOnInit(){
    this.utilsService.getCustomers().subscribe(response => {
      console.log("Customers: ", response)
      // this.customers.push(response)
    });
  }

  favoriteColorControl = new FormControl('');
}
