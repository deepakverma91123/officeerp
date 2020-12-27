import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Supplier } from '../supplier/supplier'

@Injectable({
  providedIn: 'root'
})
export class SupplierserviceService {
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




  getallsupplier() {
    return this.http.get(`${this.contactsUrl}/supplier`);

  }

  addsupplier(newItemmaster: Supplier) {
    return this.http.post(`${this.contactsUrl}/addsupplier`, newItemmaster);
  }

  getsinglesupplier(_id: string) {
    return this.http.get(`${this.contactsUrl}/supplier/${_id}`);
  }



  deletesupplier(_id: string) {
    return this.http.delete(`${this.contactsUrl}/supplier/${_id}`);

  }
  updatesupplier(_id: string, newItemmaster: Supplier) {
    return this.http.put(`${this.contactsUrl}/supplier/${_id}`, newItemmaster);
  }








  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
  }
}