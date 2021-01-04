import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
// import { Itemmaster } from '../inventory/itemmaster';
import { SalesOrderEntry } from './sales-order-entry'
import { SalesMrnEntry } from './sales-mrn-entry'
@Injectable({
  providedIn: 'root'
})
export class SalesserviceService {
  loading = true;
  uid: string;
  private contactsUrl = 'http://localhost:3000/api';

  constructor(
    private http: HttpClient
  ) {

  }



  /// sales API



  // get all sales order api
  getallsalesorder() {
    return this.http.get(`${this.contactsUrl}/getallsalesorder`);

  }

  // drodown item api reel
  getallsalesorderquery(fields: string, f1: string, f2: string, f3: string) {


    return this.http.get(`${this.contactsUrl}/getallsalesordeequery/${fields}/${f1}/${f2}/${f3}`);

  }
  // drodown item api jumbu

  // , jumbuGsm: number, jumbuBrighness: number, jumbuQuality: number

  getallsalesorderjumbuquery(field: string) {

    // Initialize Params Object
    let params = new HttpParams();

    // Begin assigning parameters
    // params = params.append('jumbuGsm', jumbuGsm.toString());
    // params = params.append('jumbuBrighness', jumbuBrighness.toString());
    // params = params.append('jumbuQuality', jumbuQuality.toString());
    // params = params.append('agesorting', agesorting.toString());
    // params = params.append('desc', desc.toString());
    return this.http.get(`${this.contactsUrl}/getallsalesorderjumbuquery/${field}`);

  }

  // add sales api

  addsalesorderentry(newitem: SalesOrderEntry) {
    return this.http.post(`${this.contactsUrl}/addsalesorder`, newitem);
  }

  // singles api 

  getsinglesalesorderentry(_id: string) {
    return this.http.get(`${this.contactsUrl}/getallsalesorder/${_id}`);
  }

  // search api
  searchsalesorderentry(itemName: string) {
    return this.http.get(`${this.contactsUrl}/getallsalesorder/${itemName}`);
  }
  //delete api

  deletesalesorderentry(_id: string) {
    return this.http.delete(`${this.contactsUrl}/getallsalesorder/${_id}`);

  }
  // update api
  updatesalesorderentry(_id: string, newitem: SalesOrderEntry) {
    return this.http.put(`${this.contactsUrl}/getallsalesorder/${_id}`, newitem);
  }





  // get all sales order api
  getallsalesmrn() {
    return this.http.get(`${this.contactsUrl}/getallsalesorder`);

  }



  // add mrn api

  addsalesmrn(newitem: SalesMrnEntry) {
    return this.http.post(`${this.contactsUrl}/addsalesmrn`, newitem);
  }

  // singles api 

  getsinglesalesmrn(_id: string) {
    return this.http.get(`${this.contactsUrl}/getallsalesmrn/${_id}`);
  }


  //delete api

  deletesalesmrn(_id: string) {
    return this.http.delete(`${this.contactsUrl}/getallsalesmrn/${_id}`);

  }
  // update api
  updatesalesmrn(_id: string, newitem: SalesMrnEntry) {
    return this.http.put(`${this.contactsUrl}/getallsalesmrn/${_id}`, newitem);
  }




  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
  }
}
