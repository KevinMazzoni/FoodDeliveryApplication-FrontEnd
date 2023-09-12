import { JsonPipe } from '@angular/common';
import { Component, EventEmitter, Input } from '@angular/core';
import { FormControl, FormControlName } from '@angular/forms';
import { UtilsService } from 'src/app/utils.service';
import { Customer } from '../../shared/customerInterface';

@Component({
  selector: 'customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {

  customers: Array<Customer> = []
  // customers: Array<any> = []
  // customers: any
  registrationModal = false
  customerModal = false
  placeOrderModal = false
  checkOrdersModal = false
  favoriteColorControl = new FormControl('')

  @Input() cardChanged: EventEmitter<any> = new EventEmitter()

  name = new FormControl('')
  surname = new FormControl('')
  address = new FormControl('')

  actualCustomer: any
  // showCustomers = false

  constructor(private utilsService: UtilsService){}

  ngOnInit(){
    // this.showCustomers = false
    console.log("On init !!!!!")

    this.cardChanged.subscribe(response => {
      this.registrationModal = false
      this.customerModal = false
      this.placeOrderModal = false
      this.checkOrdersModal = false
      this.name.setValue('');
      this.surname.setValue('');
      this.address.setValue('');
    });

    this.utilsService.getCustomers().subscribe((response: any) => {
      // this.customers = Object.values(response.customers)
      // var prova = JSON.parse(String.fromCharCode(...response))
      // this.customers = response.customers
      // console.log("JSON.parse: ", JSON.parse(this.customers.toString()))
      // console.log("response: ", Object.values(response))
      this.customers = response.customers
      console.log("response: ", response)
      console.log("Customers: ", this.customers)
      // this.showCustomers = true;
    });

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
          name: this.name.getRawValue() || '',
          surname: this.surname.getRawValue() || '',
          address: this.address.getRawValue() || '',
          id: -1
        }
    ).subscribe((response: any) => console.log(response));

    this.utilsService.getCustomers().subscribe((response: any) => {
      // this.customers = Object.values(response.customers)
      // var prova = JSON.parse(String.fromCharCode(...response))
      // this.customers = response.customers
      // console.log("JSON.parse: ", JSON.parse(this.customers.toString()))
      // console.log("response: ", Object.values(response))
      this.customers = response.customers
      console.log("response: ", response)
      console.log("Customers: ", this.customers)
      // this.showCustomers = true;
    });
    
  }

  openCustomer(name: string, surname: string, address: string){
    console.log("Customer clicked! Name: ", name, " surname: ", surname, " address: ", address)
    this.actualCustomer = {
      customer_id:
      {
          name: name,
          surname: surname,
          address: address
      }
    };
    this.customerModal = true
  }

  placeOrder(){
    this.placeOrderModal = true
    this.checkOrdersModal = false
  }

  checkOrders(){
    this.checkOrdersModal = true
    this.placeOrderModal = false
  }

}
