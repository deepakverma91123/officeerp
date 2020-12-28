import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpParams, HttpRequest } from '@angular/common/http';
import { Gatentry } from './gatentry'
import { SalesGateEntry } from './sales-gate-entry'
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

  /// gate entry

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



  editsinglegateentry(_id: string, newItem: Gatentry) {

    return this.http.put(`${this.contactsUrl}/gateentry/${_id}`, newItem);
  }

  // editsinglegateentry(newItem: Gatentry) {

  //   return this.http.put(`${this.contactsUrl}/gateentry/${newItem._id}`, newItem);
  // }
  deletegateentry(_id: string) {
    return this.http.delete(`${this.contactsUrl}/gateentry/${_id}`);

  }



  // sales gate entru

  addsalesgateentry(newItem: SalesGateEntry) {
    return this.http.post(`${this.contactsUrl}/addsalegateentry`, newItem);
  }


  getallsalesgateentry() {
    return this.http.get(`${this.contactsUrl}/salesgateentry`);
  }

  getsinglesalesgateentry(_id: string) {

    // let params1 = new HttpParams().set('_id', _id)


    return this.http.get(`${this.contactsUrl}/salesgateentry/${_id}`);
  }

  // getsinglepurchaseor(_id: string) {
  //   return this.http.get(`${this.contactsUrl}/purcha/${_id}`);
  // }



  editsinglesalesgateentry(_id: string, newItem: SalesGateEntry) {

    return this.http.put(`${this.contactsUrl}/salesgateentry/${_id}`, newItem);
  }
  deletesinglesalesgateentry(_id: string) {
    return this.http.delete(`${this.contactsUrl}/salesgateentry/${_id}`);

  }



  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', `${this.contactsUrl}/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    return this.http.get(`${this.contactsUrl}/files`);
  }


  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
  }


}

