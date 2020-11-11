import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../inventory/product';
import { Itemmaster } from '../inventory/itemmaster';
import { Iteminformation } from '../inventory/iteminformation';
import { Category } from '../inventory/category'
import { User } from '../class/user'
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // user: Observable<any | null>;
  // user: any;
  loading = true;
  uid: string;
  private contactsUrl = 'http://localhost:3000/api';
  product: Product;

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


  getContacts() {
    return this.http.get(`${this.contactsUrl}/getallproducts`);

  }

  getallunitmaster() {
    return this.http.get(`${this.contactsUrl}/allunitmaster`);

  }
  getuser(_id: string) {
    return this.http.get(`${this.contactsUrl}/getalluser/${_id}`);

  }

  getproductss(_id: string) {
    return this.http.get(`${this.contactsUrl}/getallproducts/${_id}`);
  }



  deleteProducts(_id: string) {
    return this.http.delete(`${this.contactsUrl}/${_id}`);

  }
  updateProducts(_id: string, newContact: Product) {
    return this.http.patch(`${this.contactsUrl}/${_id},`, newContact);
  }


  // post("/api/contacts")
  createContact(newContact: Product) {
    return this.http.post(`${this.contactsUrl}/addproducts`, newContact);
  }


  unitmasteradd(name: string) {
    return this.http.post(`${this.contactsUrl}/addproducts`, name);
  }

  // signin(newuser: User) {
  //   return this.http.post(`${this.contactsUrl}/login`, JSON.stringify(newuser));
  // }

  signin(newuser: User) {
    return this.http.post(`${this.contactsUrl}/login`, newuser);
  }



  signup(newuser: User) {
    return this.http.post(`${this.contactsUrl}/signup`, newuser);
  }




  //    item category API

  getallcategory() {
    return this.http.get(`${this.contactsUrl}/getallitemcategory`);

  }

  addcategory(newCategory: Category) {
    return this.http.post(`${this.contactsUrl}/additemcategory`, newCategory);
  }

  getsinglecategory(_id: string) {
    return this.http.get(`${this.contactsUrl}/getallitemcategory/${_id}`);
  }



  deletecategory(_id: string) {
    return this.http.delete(`${this.contactsUrl}/${_id}`);

  }
  updatecategory(_id: string, newCategory: Category) {
    return this.http.patch(`${this.contactsUrl}/${_id},`, newCategory);
  }



  /// item information API



  getalliteminformation() {
    return this.http.get(`${this.contactsUrl}/getalliteminformation`);

  }

  additeminformation(newIteminformation: Iteminformation) {
    return this.http.post(`${this.contactsUrl}/additeminformation`, newIteminformation);
  }

  getsingleiteminformation(_id: string) {
    return this.http.get(`${this.contactsUrl}/getalliteminformation/${_id}`);
  }



  deleteiteminformation(_id: string) {
    return this.http.delete(`${this.contactsUrl}/${_id}`);

  }
  updateiteminformation(_id: string, newIteminformation: Iteminformation) {
    return this.http.patch(`${this.contactsUrl}/${_id},`, newIteminformation);
  }





  /// Item Master API




  getallitemmaster() {
    return this.http.get(`${this.contactsUrl}/getallitemmaster`);

  }

  additemmaster(newItemmaster: Itemmaster) {
    return this.http.post(`${this.contactsUrl}/additemmaster`, newItemmaster);
  }

  getsingleitemmaster(_id: string) {
    return this.http.get(`${this.contactsUrl}/getallitemmaster/${_id}`);
  }



  deleteitemmaster(_id: string) {
    return this.http.delete(`${this.contactsUrl}/${_id}`);

  }
  updateitemmaster(_id: string, newItemmaster: Itemmaster) {
    return this.http.patch(`${this.contactsUrl}/${_id},`, newItemmaster);
  }







  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
  }
}