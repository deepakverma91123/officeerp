import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gatentry } from './gatentry'
import { Observable, from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GatentryServiceService {
  loading = true;

  private contactsUrl = 'http://localhost:3000/api';

  constructor(
    private http: HttpClient
  ) {

  }

  /// indententry

  addgateentry(newItem: Gatentry) {
    return this.http.post(`${this.contactsUrl}/addgateentry`, newItem);
  }


  getallgateentry() {
    return this.http.get(`${this.contactsUrl}/gateentry`);
  }

  getsinglegateentry(_id: string) {

    // let params1 = new HttpParams().set('_id', _id)


    return this.http.get(`${this.contactsUrl}/gateentry/${_id}`);
  }

  // getsinglepurchaseor(_id: string) {
  //   return this.http.get(`${this.contactsUrl}/purcha/${_id}`);
  // }



  editsinglegateentry(newItem: Gatentry, _id: string) {

    return this.http.put(`${this.contactsUrl}/gateentry/${_id}`, newItem);
  }

  // editsinglegateentry(newItem: Gatentry) {

  //   return this.http.put(`${this.contactsUrl}/gateentry/${newItem._id}`, newItem);
  // }
  deletegateentry(_id: string) {
    return this.http.delete(`${this.contactsUrl}/gateentry/${_id}`);

  }








  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
  }


}

