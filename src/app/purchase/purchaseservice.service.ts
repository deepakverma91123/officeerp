import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Purchase } from './purchase'
import { Indententry } from './indententry'
import { Mrnentry } from './mrnentry'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PurchaseserviceService {

  private contactsUrl = 'http://localhost:3000/api';

  constructor(
    private http: HttpClient
  ) {

  }

  /// indententry

  addindententry(newItem: Indententry) {
    return this.http.post(`${this.contactsUrl}/addindententry`, newItem);
  }


  getallindenentry() {
    return this.http.get(`${this.contactsUrl}/indententry`);
  }

  getsingleindententry(_id: string) {

    let params1 = new HttpParams().set('_id', _id)


    return this.http.get(`${this.contactsUrl}/indententry/${_id}`);
  }







  /// purchase 


  getallpurchaseorder() {
    return this.http.get(`${this.contactsUrl}/purchaseorder`);

  }

  additemmaster(newItem: Purchase) {
    return this.http.post(`${this.contactsUrl}/addpurchase`, newItem);
  }

  getsingleitemmaster(_id: string) {
    return this.http.get(`${this.contactsUrl}/getallitemmaster/${_id}`);
  }



  deleteitemmaster(_id: string) {
    return this.http.delete(`${this.contactsUrl}/${_id}`);

  }


  /// mrn entry




  getallmrnentry() {
    return this.http.get(`${this.contactsUrl}/mrnentry`);

  }

  addmrnentry(newItem: Mrnentry) {
    return this.http.post(`${this.contactsUrl}/addmrnentry`, newItem);
  }

  getsinglemrnentry(_id: string) {
    return this.http.get(`${this.contactsUrl}/mrnentry/${_id}`);
  }



  deletemrnentry(_id: string) {
    return this.http.delete(`${this.contactsUrl}/mrnentry/${_id}`);

  }





}

