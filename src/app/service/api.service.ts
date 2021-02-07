import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../inventory/product';
import { Itemmaster } from '../inventory/itemmaster';
import { Iteminformation } from '../inventory/iteminformation';
import { SupplierInformation } from '../inventory/supplier-information'
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
    return this.http.post(`${this.contactsUrl}/addunitmaster`, name);
  }

  unitmasterall() {
    return this.http.get(`${this.contactsUrl}/allunitmaster`);
  }
  unitmastersingledelete() {
    return this.http.get(`${this.contactsUrl}/allunitmaster`);
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

  getallitemmastercount() {
    return this.http.get(`${this.contactsUrl}/getallitemmastercount`);

  }

  additemmaster(newItemmaster: Itemmaster) {
    return this.http.post(`${this.contactsUrl}/additemmaster`, newItemmaster);
  }

  /// filter item master
  itemmasterfilter(newItem: Itemmaster) {

    // Initialize Params Object
    return this.http.post(`${this.contactsUrl}/filteritemmaster`, newItem);

  }

  categorybehalfitemmaster(f1: string) {

    // Initialize Params Object/${_id}
    return this.http.get(`${this.contactsUrl}/getallitemmastercategory/${f1}`);

  }

  supplierbehalfitemmaster(s1: string) {
    // Initialize Params Object/${_id}
    return this.http.get(`${this.contactsUrl}/getallitemmastersupplier/${s1}`);

  }

  getsingleitemmaster(_id: string) {
    return this.http.get(`${this.contactsUrl}/getallitemmaster/${_id}`);
  }

  searchitemmaster(itemName: string) {
    return this.http.get(`${this.contactsUrl}/searchitemmaster/${itemName}`);
  }

  deleteitemmaster(_id: string) {
    return this.http.delete(`${this.contactsUrl}/getallitemmaster/${_id}`);

  }
  updateitemmaster(_id: string, newItemmaster: Itemmaster) {
    return this.http.put(`${this.contactsUrl}/getallitemmaster/${_id}`, newItemmaster);
  }





  /// Supplier Information Api 




  getallsupplierinformation() {
    return this.http.get(`${this.contactsUrl}/getallsupplierinformation`);

  }

  addsupplierinformation(newItemmaster: SupplierInformation) {
    return this.http.post(`${this.contactsUrl}/addsupplierinformation`, newItemmaster);
  }

  getsinglesupplierinformation(_id: string) {
    return this.http.get(`${this.contactsUrl}/getallsupplierinformation/${_id}`);
  }



  deletesupplierinformation(_id: string) {
    return this.http.delete(`${this.contactsUrl}/getallsupplierinformation${_id}`);

  }







  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
  }
}