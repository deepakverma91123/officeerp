import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../customer/customer'
@Injectable({
  providedIn: 'root'
})
export class CustomerserviceService {
  // user: Observable<any | null>;
  // user: any;
  loading = true;
  uid: string;
  private contactsUrl = 'http://localhost:3000/api'

  constructor(
    private http: HttpClient
  ) {

  }




  /// Supplier  API




  getallcustomer() {
    return this.http.get(`${this.contactsUrl}/customer`);

  }

  addcustomer(newItemmaster: Customer) {
    return this.http.post(`${this.contactsUrl}/addcustomer`, newItemmaster);
  }

  getsinglecustomer(_id: string) {
    return this.http.get(`${this.contactsUrl}/customer/${_id}`);
  }



  deletecustomer(_id: string) {
    return this.http.delete(`${this.contactsUrl}/customer/${_id}`);

  }
  updatecustomer(_id: string, newItemmaster: Customer) {
    return this.http.put(`${this.contactsUrl}/customer/${_id}`, newItemmaster);
  }


  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
  }
}