import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Purchase } from './purchase'
import { Indententry } from './indententry'
import { Mrnentry } from './mrnentry'
import { Billentry } from './billentry'
import { Purchasereturn } from './purchasereturn'
import { Indenterprofile } from './indenterprofile'
import { Observable, from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PurchaseserviceService {
  loading = true;

  private contactsUrl = 'http://3.134.107.134:3000/api';

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

    // let params1 = new HttpParams().set('_id', _id)


    return this.http.get(`${this.contactsUrl}/indententry/${_id}`);
  }


  editsingleindententry(_id: string, newItem: Indententry) {

    return this.http.put(`${this.contactsUrl}/indententry/${_id}`, newItem);
  }

  deleteindententry(_id: string) {
    return this.http.delete(`${this.contactsUrl}/indententry/${_id}`);

  }






  /// purchase 


  getallpurchaseorder() {
    return this.http.get(`${this.contactsUrl}/purchaseorder`);

  }

  additemmaster(newItem: Purchase) {
    return this.http.post(`${this.contactsUrl}/addpurchase`, newItem);
  }

  getsinglepurchaseorder(_id: string) {
    return this.http.get(`${this.contactsUrl}/purchaseorder/${_id}`);
  }

  getsinglepurchaseor(_id: string) {
    return this.http.get(`${this.contactsUrl}/purcha/${_id}`);
  }

  updatepurchaseorder(_id: string, newItem: Purchase) {

    return this.http.put(`${this.contactsUrl}/purchaseorder/${_id}`, newItem);
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

  // Bill Entry


  getallbillentry() {
    return this.http.get(`${this.contactsUrl}/billentry`);

  }

  addbillentry(newItem: Billentry) {
    return this.http.post(`${this.contactsUrl}/addbillentry`, newItem);
  }

  getsinglebillentry(_id: string) {
    return this.http.get(`${this.contactsUrl}/billentry/${_id}`);
  }



  deletebillentry(_id: string) {
    return this.http.delete(`${this.contactsUrl}/billentry/${_id}`);

  }







  // purchase return

  getallpurchasereturn() {
    return this.http.get(`${this.contactsUrl}/purchasereturn`);

  }

  addpurchasereturn(newItem: Purchasereturn) {
    return this.http.post(`${this.contactsUrl}/addpurchasereturn`, newItem);
  }

  getsinglepurchasereturn(_id: string) {
    return this.http.get(`${this.contactsUrl}/purchasereturn/${_id}`);
  }



  deletepurchasereturn(_id: string) {
    return this.http.delete(`${this.contactsUrl}/purchasereturn/${_id}`);

  }

  // indenter profile 

  getallindentprofile() {
    return this.http.get(`${this.contactsUrl}/indentprofile`);

  }

  addindentprofile(newItem: Indenterprofile) {
    return this.http.post(`${this.contactsUrl}/addindentprofile`, newItem);
  }

  getsingleindentprofile(_id: string) {
    return this.http.get(`${this.contactsUrl}/indentprofile/${_id}`);
  }



  deleteindentprofile(_id: string) {
    return this.http.delete(`${this.contactsUrl}/indentprofile/${_id}`);

  }




  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
  }


}

