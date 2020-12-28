import { Component, OnInit, OnDestroy, ViewEncapsulation, ChangeDetectionStrategy, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ApiService } from 'src/app/service/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { PurchaseserviceService } from '../../purchase/purchaseservice.service';
import { EventEmitter } from 'events';
import { SalesserviceService } from '../salesservice.service';
@Component({
  selector: 'app-sales-order-entry',
  templateUrl: './sales-order-entry.component.html',
  styleUrls: ['./sales-order-entry.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SalesOrderEntryComponent implements OnInit {
  @Output() public ngModelChange = new EventEmitter();
  selected = 'publish';
  albums: any = [];
  htmlContent = '';
  post: any;
  searchjumbu: any = []
  allindententry: any = [];
  singleindententry: any = [];
  singleindententrydetails: any = [];
  FullArray: any = [];
  singleindenteditentrydetails: any = [];
  id: string;
  selectedCar: number;
  selectedalbumid: string;
  cars = [
    { id: 1, name: 'Volvo' },
    { id: 2, name: 'Saab' },
    { id: 3, name: 'Opel' },
    { id: 4, name: 'Audi' },
  ];
  _id: string;
  random: string;
  possible: string;
  salesDetails: any = []
  total: string;
  search: any = [];
  model: any = {};
  constructor(public location: Location, private salesservice: SalesserviceService, private purchaseservice: PurchaseserviceService, public snackBar: MatSnackBar,
    private router: Router, private route: ActivatedRoute, private _location: Location) {
    this._id = this.route.snapshot.paramMap.get('id');


    this.purchaseservice.getallindenentry().subscribe(data => {
      this.allindententry = data;
      console.log(this.allindententry)


    })

  }

  ngOnInit() {




  }

  back() {
    if (window.history.length > 2) {
      this._location.back();
    } else {
      this.router.navigate(['/']);
    }
  }


  makeID() {
    this.random = "";
    this.possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++) {
      this.random += this.possible.charAt(Math.floor(Math.random() * this.possible.length));
    }
    console.log(this.random)
  }

  onSubmit(model, f) {

    model.salesorderNumber = this.random;
    this.salesservice.addsalesorderentry(model).subscribe(res => {

      console.log(model + 'add')
    })


    console.log(model)
    f.resetForm();
    this.snackBar.open('saved', '', { duration: 3000 });
    // this.router.navigate(['/landing']);

  }

  onalbum(selectedalbumid: string) {
    console.log(selectedalbumid)
    // this.ngModelChange.emit(selectedalbumid);
    this.purchaseservice.getsingleindententry(selectedalbumid).subscribe(data => {
      this.singleindententrydetails = data;



      this.FullArray = this.singleindententrydetails.Tickets
      this.total = this.FullArray.reduce((a, b) => a + +b.reqQtys, 0)
      // for (let item of this.FullArray) {
      //   console.log(item);
      // }

      console.log(this.singleindententrydetails)
      console.log(this.singleindententrydetails._id)


    })

  }





  deleteProduct(e) {

    this.singleindententrydetails = this.singleindententrydetails.forEach(element => {
      element._id !== e
    });




    // filter(item => item._id !== e);
    // this.purchaseservice.deleteindententry(e._id).subscribe(res => {
    //   console.log('delete product')
    //   console.log(e._id)
    // }

    // );
    console.log('delete product')

    console.log(e._id)


  }


  // editProduct(newItem: Indententry) {
  //   this.id = this.route.snapshot.paramMap.get("id");

  //   this.purchaseservice.editsingleindententry(newItem, this.id).subscribe(data => {


  //     this.router.navigate(["/landing"]);

  //   })

  // }


  // onEdit(_id: string, newItem: Indententry) {
  //   this.purchaseservice.editsingleindententry(newItem).subscribe(res => {
  //     console.log('updte')


  //     this.router.navigate(["/indententry"]);

  //   })
  // }
  onKey(event) {
    const inputValue = event.target.value;
    console.log(inputValue)

    this.salesservice.getallsalesorderquery(inputValue).subscribe(res => {
      // console.log(res)
      this.search = res
      console.log(this.search)


      for (let i = 0; i <= this.search; i++) {
        this.salesDetails = this.search;

      }
      // this.salesDetails = this.search;
      // console.log(this.salesDetails)
    })

  }

  onKeyjumbu(event) {
    const inputValjumbu = event.target.value;
    console.log(inputValjumbu);

    this.salesservice.getallsalesorderjumbuquery(inputValjumbu).subscribe(res => {
      // console.log(res)
      this.searchjumbu = res;
      console.log(this.searchjumbu);


      // for (let i = 0; i <= this.searchjumbu; i++) {
      //   this.salesDetails = this.searchjumbu;
      //   console.log(this.salesDetails)

      // }
      // this.salesDetails = this.searchjumbu;
      // console.log(this.salesDetails)
    })

  }


}
