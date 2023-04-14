import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Customer } from './customerInterface'

@Component({
  selector: 'customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
  title="card"
  @Input() name = ''
  @Input() customers: Array<Customer> = [
    {
      name: "Jhonny",
      surname: "Stecchino",
      address: "Via Golgi, 7, 40123, Milano"
    },
    {
      name: "Mario",
      surname: "Rossi",
      address: "Via Larga, 9, 40000, Bologna"
    },
    {
      name: "Giovanni",
      surname: "Neri",
      address: "Via Mattei, 10, 40567, Roma"
    }
  ]
  favoriteColorControl = new FormControl('');
}
