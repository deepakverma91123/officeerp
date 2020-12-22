import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Itemmaster } from '../inventory/itemmaster';
import { SalesOrderEntry } from './sales-order-entry'
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

    // this.http.get(`${this.contactsUrl}/getalluser`).subscribe((data: any) => {

    //   this.user = data;
    //   if (data) {
    //     this.uid = data.uid;
    //     this.loading = false;

    //   }
    //   else {
    //     this.loading = false;
    //     return 0;

    //   }
    // })





  }



  /// Item Master API




  getallsalesorder() {
    return this.http.get(`${this.contactsUrl}/getallsalesorder`);

  }

  addsalesorderentry(newitem: SalesOrderEntry) {
    return this.http.post(`${this.contactsUrl}/addsalesorder`, newitem);
  }

  getsinglesalesorderentry(_id: string) {
    return this.http.get(`${this.contactsUrl}/getallsalesorder/${_id}`);
  }

  searchsalesorderentry(itemName: string) {
    return this.http.get(`${this.contactsUrl}/getallsalesorder/${itemName}`);
  }

  deletesalesorderentry(_id: string) {
    return this.http.delete(`${this.contactsUrl}/getallsalesorder/${_id}`);

  }
  updatesalesorderentry(_id: string, newitem: SalesOrderEntry) {
    return this.http.put(`${this.contactsUrl}/getallsalesorder/${_id}`, newitem);
  }








  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
  }
}
