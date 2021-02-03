import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Department } from './department'
@Injectable({
  providedIn: 'root'
})
export class DepartmentserviceService {
  loading = true;

  private contactsUrl = 'http://localhost:3000/api';

  constructor(
    private http: HttpClient
  ) {

  }

  /// indententry

  adddepartment(newItem: Department) {
    return this.http.post(`${this.contactsUrl}/adddepartment`, newItem);
  }


  getalldepartment() {
    return this.http.get(`${this.contactsUrl}/indententry`);
  }

  getsingledepartment(_id: string) {

    // let params1 = new HttpParams().set('_id', _id)


    return this.http.get(`${this.contactsUrl}/indententry/${_id}`);
  }


  editsingledepartment(_id: string, newItem: Department) {

    return this.http.put(`${this.contactsUrl}/indententry/${_id}`, newItem);
  }

  deletedepartment(_id: string) {
    return this.http.delete(`${this.contactsUrl}/indententry/${_id}`);

  }











  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
  }


}

