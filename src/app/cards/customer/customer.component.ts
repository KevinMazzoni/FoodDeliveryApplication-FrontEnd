import { Component, EventEmitter, Input } from '@angular/core';
import { FormControl, FormControlName } from '@angular/forms';
import { UtilsService } from 'src/app/utils.service';
import { Customer } from './customerInterface';

@Component({
  selector: 'customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {

  customers: Array<Customer> = []
  registrationModal = false
  customerModal = false
  favoriteColorControl = new FormControl('')

  @Input() cardChanged: EventEmitter<any> = new EventEmitter()

  name = new FormControl('');
  surname = new FormControl('');
  address = new FormControl('');

  constructor(private utilsService: UtilsService){}

  ngOnInit(){
    this.cardChanged.subscribe(response => {
      this.registrationModal = false
      this.customerModal = false
    });

    this.utilsService.getCustomers().subscribe((response: any) => {
      console.log("Customers: ", response)
      this.customers = response.customers
    });
    console.log("onInit detected")
  }

  ngOnChanges(){
    console.log("On changes detected");
    this.name.setValue('');
    this.surname.setValue('');
    this.address.setValue('');
  }

  registration(){
    this.registrationModal = true
  }

  exit(){
    this.name.setValue('');
    this.surname.setValue('');
    this.address.setValue('');
    this.registrationModal = false
  }

  submit(){
    //TODO
    console.log("Submit button clicked\nname: ", this.name.getRawValue(), "\nsurname: ", this.surname.getRawValue(), "\naddress: ", this.address.getRawValue())
    
    //Agganciare APi
    this.utilsService.newCustomer(
      {
        customer_id: {
          name: this.name.getRawValue() || '',
          surname: this.surname.getRawValue() || '',
          address: this.address.getRawValue() || ''
        }
      }
    ).subscribe((response: any) => console.log(response))
  }

  openCustomer(name: string, surname: string, address: string){
    console.log("Customer clicked! Name: ", name, " surname: ", surname, " address: ", address)
    this.customerModal = true;
  }

}
