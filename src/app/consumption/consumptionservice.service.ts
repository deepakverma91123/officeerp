import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Consumption } from '../consumption/consumption';

@Injectable({
  providedIn: 'root'
})
export class ConsumptionserviceService {
  loading = true;
  uid: string;
  private contactsUrl = 'http://localhost:3000/api';
  // product: Product;

  constructor(
    private http: HttpClient
  ) {


  }



  getallconsumption() {
    return this.http.get(`${this.contactsUrl}/getallconsumption`);

  }

  addconsumption(newItemmaster: Consumption) {
    return this.http.post(`${this.contactsUrl}/addconsumption`, newItemmaster);
  }

  getsingleconsumption(_id: string) {
    return this.http.get(`${this.contactsUrl}/getallconsumption/${_id}`);
  }



  deleteconsumption(_id: string) {
    return this.http.delete(`${this.contactsUrl}/getallconsumption/${_id}`);

  }
  updateconsumption(_id: string, newItemmaster: Consumption) {
    return this.http.put(`${this.contactsUrl}/getallconsumption/${_id}`, newItemmaster);
  }




  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
  }
}