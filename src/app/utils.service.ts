import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Customer } from './shared/customerInterface';
import { Order } from './shared/orderInterface';

@Injectable()
export class UtilsService {

  getCustomersURL: string = 'https://4202c383-5f43-4488-850e-82c95f021f2a.mock.pstmn.io/demo';
  getItemsURL: string = 'https://4202c383-5f43-4488-850e-82c95f021f2a.mock.pstmn.io/items';
  newCustomerURL: string = 'https://';
  newOrderURL: string = 'https://';

  constructor(private httpClient: HttpClient) { }

  /** GET: get customers from the Back-End */
  getCustomers(){
    return this.httpClient.get<Customer>(this.getCustomersURL)
  }
  /** GET: get items from the Back-End */
  getItems(){
    return this.httpClient.get(this.getItemsURL)
  }
  /** POST: add a new customer */
  newCustomer(customer: Customer): Observable<Customer>{
    console.log("Ricevuto customer: ", customer)
    return this.httpClient.post<Customer>(this.newCustomerURL, customer)
  }
  /** POST: add a new item */
  newOrder(order: Order): Observable<Order>{
    console.log("Ricevuto order: ", order)
    return this.httpClient.post<Order>(this.newOrderURL, order)
  }
}