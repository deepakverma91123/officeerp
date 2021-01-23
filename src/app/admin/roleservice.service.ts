import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Roles } from './roles'
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class RoleserviceService {
  loading = true;

  private contactsUrl = 'http://localhost:3000/api';

  constructor(
    private http: HttpClient, private router: Router
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


  login(newItem: Roles) {
    return this.http.post<any>(`${this.contactsUrl}/adminroleslogin`, newItem);
  }

  logOut() {
    localStorage.removeItem("token");
    // this.router.navigate(["/listings"]);
  }

  loggedIn() {
    return !!localStorage.getItem("token");
  }





  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
  }


}

