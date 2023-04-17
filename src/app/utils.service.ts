import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Customer } from './cards/customer/customerInterface';

@Injectable()
export class UtilsService {
  constructor(private httpClient: HttpClient) { }

  getCustomers(){
    return this.httpClient.get<Customer>("https://4202c383-5f43-4488-850e-82c95f021f2a.mock.pstmn.io/demo")
  }
}