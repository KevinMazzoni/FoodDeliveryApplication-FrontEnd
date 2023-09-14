import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Customer } from './shared/customerInterface';
import { Item, Order } from './shared/orderInterface';

@Injectable()
export class UtilsService {

  // getCustomersURL: string = 'https://4202c383-5f43-4488-850e-82c95f021f2a.mock.pstmn.io/demo';
  // getCustomersURL: string = '/api/';
  getCustomersURL: string = 'http://192.168.130.65:8000/customers';

  getItemsURL: string = 'http://192.168.130.65:8001/items';
  getOrdersURL: string = 'http://192.168.130.65:8002/orders';
  getCustomerOrdersURL: string = 'http://192.168.130.65:8002/customer-orders';
  newCustomerURL: string = 'http://192.168.130.65:8000/new-customer';
  newOrderURL: string = 'http://192.168.130.65:8001/new-order';
  updateItemsURL: string = 'http://192.168.130.65:8001/update-items';
  updateDeliveryURL: string = 'http://192.168.130.65:8002/update-shipping';

  constructor(private httpClient: HttpClient) { }

  /** GET: get customers from the Back-End */
  getCustomers(){
    return this.httpClient.get<Customer>(this.getCustomersURL)
  }
  /** GET: get items from the Back-End */
  
  getItems(){
    return this.httpClient.get<Item>(this.getItemsURL)
  }
  /** GET: get orders from the Back-End */
  getOrders(){
    return this.httpClient.get<Order>(this.getOrdersURL)
  }

  getCustomerOrders(customerId: string){
    return this.httpClient.get<Order>(this.getCustomerOrdersURL + "?user_id=" + customerId)
  }
  /** POST: add a new customer */
  newCustomer(customer: Customer): Observable<Customer>{
    console.log("Ricevuto customer: ", customer)
    return this.httpClient.post<Customer>(this.newCustomerURL, customer)
  }
  /** POST: add a new item */
  newOrder(order: any)/*: Observable<Order>*/{
    console.log("Ricevuto order: ", order)
    return this.httpClient.post<any>(this.newOrderURL, order)
  }
  /** PUT: update items by admin */
  updateItems(items: any){
    console.log("Updated items:", items)
    
    return this.httpClient.put(this.updateItemsURL, items )
  }
  updateDelivery(orderId: string){
    console.log("Updated delivery:", orderId)
    return this.httpClient.put(this.updateDeliveryURL, {"shipment":{"order_id": orderId, "status": "delivered"}})
  }
}