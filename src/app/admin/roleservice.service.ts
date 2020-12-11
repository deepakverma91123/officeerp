import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Roles } from './roles'
@Injectable({
  providedIn: 'root'
})
export class RoleserviceService {
  loading = true;

  private contactsUrl = 'http://localhost:3000/api';

  constructor(
    private http: HttpClient
  ) {

  }

  /// indententry

  addroles(newItem: Roles) {
    return this.http.post(`${this.contactsUrl}/addroles`, newItem);
  }


  getallroles() {
    return this.http.get(`${this.contactsUrl}/roles`);
  }

  getsingleroles(_id: string) {

    let params1 = new HttpParams().set('_id', _id)


    return this.http.get(`${this.contactsUrl}/roles/${_id}`);
  }


  editsingleroles(newItem: Roles) {

    return this.http.put(`${this.contactsUrl}/roles/${newItem._id}`, newItem);
  }

  deleteroles(_id: string) {
    return this.http.delete(`${this.contactsUrl}/roles/${_id}`);

  }




  /// signup api 




  



  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
  }


}

