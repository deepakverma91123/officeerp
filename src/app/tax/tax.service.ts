import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tax } from './tax'
@Injectable({
  providedIn: 'root'
})
export class TaxService {
  // user: Observable<any | null>;
  // user: any;
  loading = true;
  uid: string;
  private contactsUrl = 'http://localhost:3000/api';

  constructor(
    private http: HttpClient
  ) {

  }




  /// Supplier  API




  getalltax() {
    return this.http.get(`${this.contactsUrl}/getalltax`);

  }

  addtax(tax: Tax) {
    return this.http.post(`${this.contactsUrl}/addtax`, tax);
  }

  // getsinglesupplier(_id: string) {
  //   return this.http.get(`${this.contactsUrl}/supplier/${_id}`);
  // }



  // deletesupplier(_id: string) {
  //   return this.http.delete(`${this.contactsUrl}/supplier/${_id}`);

  // }
  // updatesupplier(_id: string, newItemmaster: Supplier) {
  //   return this.http.put(`${this.contactsUrl}/supplier/${_id}`, newItemmaster);
  // }








  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
  }
}