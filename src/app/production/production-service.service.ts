import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Jumboroll } from './jumboroll'
import { Observable, from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductionServiceService {
  loading = true;

  private contactsUrl = 'http://localhost:3000/api';

  constructor(
    private http: HttpClient
  ) {

  }

  /// indententry

  addjumborollentry(newItem: Jumboroll) {
    return this.http.post(`${this.contactsUrl}/addjumboentry`, newItem);
  }


  getjumborollentry() {
    return this.http.get(`${this.contactsUrl}/jumborollentry`);
  }

  getsinglejumborollentry(_id: string) {

    let params1 = new HttpParams().set('_id', _id)


    return this.http.get(`${this.contactsUrl}/jumborollentry/${_id}`);
  }


  editjumborollentry(newItem: Jumboroll) {

    return this.http.put(`${this.contactsUrl}/jumborollentry/${newItem._id}`, newItem);
  }

  deletejumborollentry(_id: string) {
    return this.http.delete(`${this.contactsUrl}/jumborollentry/${_id}`);

  }








  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
  }


}

