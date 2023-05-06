import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Customer } from './cards/customer/customerInterface';

@Injectable()
export class UtilsService {

  getCustomersURL: string = 'https://4202c383-5f43-4488-850e-82c95f021f2a.mock.pstmn.io/demo';
  newCustomerURL: string = 'https://';

  constructor(private httpClient: HttpClient) { }

  /** GET: get customers from the database */
  getCustomers(){
    return this.httpClient.get<Customer>(this.getCustomersURL)
  }

  /** POST: add a new customer to the database */
  newCustomer(customer: Customer): Observable<Customer>{
    console.log("Ricevuto customer: ", customer)
    return this.httpClient.post<Customer>(this.newCustomerURL, customer)
  }
}