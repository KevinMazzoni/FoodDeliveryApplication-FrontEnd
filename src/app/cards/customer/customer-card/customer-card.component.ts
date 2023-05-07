import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Customer } from '../../../shared/customerInterface'

@Component({
  selector: 'customer-card',
  templateUrl: './customer-card.component.html',
  styleUrls: ['./customer-card.component.css']
})
export class CustomerCardComponent {
  title="card"
  @Input() name = ''
  @Input() surname = ''
  @Input() address = ''

  ngOnInit(){
    console.log("Initialized CustomerCardComponent, name: ", this.name, " surname: ", this.surname, " address: ", this.address)
  }
}
