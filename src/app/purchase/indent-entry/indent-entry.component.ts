import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ApiService } from 'src/app/service/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Itemmaster } from '../../inventory/itemmaster'
import { PurchaseserviceService } from '../purchaseservice.service';
import { $ } from 'protractor';
@Component({
  selector: 'app-indent-entry',
  templateUrl: './indent-entry.component.html',
  styleUrls: ['./indent-entry.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IndentEntryComponent implements OnInit {
  selected = 'publish';
  albums: any = [];
  htmlContent = '';
  post: any;
  Unit: any = [];
  step = 0;
  dataSource: MatTableDataSource<Itemmaster>;
  displayedColumns: string[] = ['sr', 'itemName', 'manualCode', 'currentStock', 'unitName', 'reordQTY', 'reqQTY', 'costCenter', 'reqDate', 'remark'];
  // randomInt = (min: number, max: number): number => {
  //   return Math.floor(Math.random() * (max - min + 1) + min);
  // };

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }



  singleiteminformation: any = [];
  ItemsName: any = [];
  value = 1;
  e = '';
  _id: string;
  id: string;
  StudentData: any = [];
  model: any = {};
  random: string;
  possible: string;
  singleindent: any = [];
  singleindententry: any = [];
  full: any = {};
  inputValue = [];
  constructor(public location: Location, private apiservice: ApiService, private purchaseservice: PurchaseserviceService, public snackBar: MatSnackBar,
    private router: Router, private route: ActivatedRoute, private _location: Location) {
    this._id = this.route.snapshot.paramMap.get('id');

    this.apiservice.getallitemmaster().subscribe(data => {
      this.StudentData = data;
      this.dataSource = new MatTableDataSource<Itemmaster>(this.StudentData);

    })

  }

  ngOnInit() {
    // this.Unit = 
    // this.albums = this.apiservice.getContacts();
    this.purchaseservice.getsingleindententry(this._id).subscribe(data => {
      this.singleindententry = data;
      this.full = this.singleindententry

      console.log('report' + this.full)

    })
    this.apiservice.getallunitmaster().subscribe(data => {
      this.Unit = data;

    })


    this.apiservice.getalliteminformation().subscribe(data => {
      this.ItemsName = data;
      console.log(this.ItemsName)

    })



    this.purchaseservice.getsingleindententry(this.id).subscribe(data => {

      this.singleindent = data;
      console.log('get single' + this.singleindent)
    })

  }

  searchAutocomplete(e, index) {
    console.log(index)
    this.inputValue[index] = e
    // rest of the code
    console.log(this.inputValue)
    // console.log(this.model.totalAmounts = e)

  }

  onKey(value) {
    this.value = value
    console.log(this.value = value)

    // console.log(this.model.totalAmounts = this.value)

  }

  back() {
    if (window.history.length > 2) {
      this._location.back();
    } else {
      this.router.navigate(['/']);
    }
  }




  onSubmit(model, f) {
    console.log(model)
    model.indentNumber = this.random
    // this.model.Tickets.totalAmounts = this.inputValue
    // model.totalAmount = this.inputValue
    // console.log(this.model.Tickets.totalAmounts)
    // this.model.inputValue = this.e
    console.log(model)
    for (let i = 0; i < this.inputValue.length; i++) {

      this.model.Tickets[i]['totalAmounts'] = this.inputValue[i]

    }


    this.purchaseservice.addindententry(model).subscribe((res) => {
      console.log(model)
      this.post = res;
      // this.model.inputValue = this.inputValue


      console.log("add indent entry");
    });
    f.resetForm();
    this.snackBar.open('saved', '', { duration: 3000 });
    // this.router.navigate(['/indententlanding']);
  }

  onAdd(value) {
    if (!this.model.Tickets) {
      this.model.Tickets = [];
      // this.model.Tickets = this.inputValue
    }
    Array.from({ length: value }, (_, i) => this.model.Tickets.push({}));
  }

  onRemove(value) {
    this.model.Tickets = [];
    Array.from({ length: value - 1 }, (_, i) => this.model.Tickets.push({}));
  }

  makeid() {
    this.random = "";
    this.possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++) {
      this.random += this.possible.charAt(Math.floor(Math.random() * this.possible.length));
    }
    console.log(this.random)
  }



  onalbum(selectedalbumid: string) {
    console.log(selectedalbumid)
    // this.ngModelChange.emit(selectedalbumid);
    this.apiservice.getsingleiteminformation(selectedalbumid).subscribe(data => {
      // setTimeout(() => {
      //   this.singleindententrydetails = data;

      // }, 2000);

      this.singleiteminformation = data;


      // this.singleiteminformation.itemName


    })

  }



}
