import { Component, OnInit, OnDestroy, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ApiService } from 'src/app/service/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { PurchaseserviceService } from '../../purchase/purchaseservice.service';
import { GatentryServiceService } from 'src/app/gateentry/gatentry-service.service';
import { zip } from "rxjs";
import { SalesserviceService } from '../salesservice.service';
@Component({
  selector: 'app-sales-mrn-entry',
  templateUrl: './sales-mrn-entry.component.html',
  styleUrls: ['./sales-mrn-entry.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SalesMrnEntryComponent implements OnInit {
  selected = 'publish';
  albums: any = [];
  htmlContent = '';
  post: any;
  allSale: any = [];
  gate: any = [];
  total: number;
  gateTogle: string;
  indent: any = [];
  FullArray: any = [];
  singlegateentry: any = [];
  purchaseOrders: any = [];
  selectedCar: number;
  singlepurchaseorderdetails: any = [];
  singlegateentrydatails: any = [];
  cars = [
    { id: 1, name: 'Volvo' },
    { id: 2, name: 'Saab' },
    { id: 3, name: 'Opel' },
    { id: 4, name: 'Audi' },
  ];
  _id: string;
  possible: string;
  random: string;
  model: any = {};
  constructor(public location: Location, private salesservice: SalesserviceService, private gateservice: GatentryServiceService, private purchaseservice: PurchaseserviceService, public snackBar: MatSnackBar,
    private router: Router, private route: ActivatedRoute, private _location: Location) {
    this._id = this.route.snapshot.paramMap.get('id');

  }

  ngOnInit() {
    // this.Unit = 
    // this.albums = this.apiservice.getContacts();
    this.salesservice.getallsalesorder().subscribe(data => {
      this.allSale = data;

    })
    this.gateservice.getallgateentry().subscribe(data => {
      this.gate = data;

    })

    // this.purchaseservice.getsingleindententry(this._id).subscribe(data => {

    //   this.indent = data
    // })

  }

  back() {
    if (window.history.length > 2) {
      this._location.back();
    } else {
      this.router.navigate(['/']);
    }
  }


  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      ['bold']
    ],
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  };


  makeID() {
    this.random = "";
    this.possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++) {
      this.random += this.possible.charAt(Math.floor(Math.random() * this.possible.length));
    }
    console.log(this.random)
  }

  onSubmit(model, f) {
    model.mrnNumber = this.random;

    this.purchaseservice.addmrnentry(model).subscribe((res) => {
      this.post = res;
      // let _id = res['_id'];

      console.log("Created a mrn");
    });
    f.resetForm();
    this.snackBar.open('saved', '', { duration: 3000 });
    // this.router.navigate(['/landing']);

  }


  // purchaseorders(purchaseorderid: string) {

  //   console.log(purchaseorderid)
  //   // this.ngModelChange.emit(selectedalbumid);
  //   this.purchaseservice.getsinglepurchaseor(purchaseorderid).subscribe(data => {
  //     this.singlepurchaseorderdetails = data;

  //     console.log(this.singlepurchaseorderdetails)
  //     this.purchaseOrders = this.singlepurchaseorderdetails.indetData.Tickets
  //     this.total = this.purchaseOrders.reduce((a, b) => a + +b.reqQtys, 0)
  //     console.log(this.singlepurchaseorderdetails.indetData.Tickets)


  //   })



  // }



  myFun(purchaseorderid: string) {
    // this.showForm = !this.showForm;

    zip(this.purchaseservice.getsinglepurchaseor(purchaseorderid), this.gateservice.getsinglegateentry(purchaseorderid))
      .subscribe(([response1, response2]) => {

        this.singlepurchaseorderdetails = response1;
        console.log(this.singlepurchaseorderdetails)
        this.purchaseOrders = this.singlepurchaseorderdetails.indetData.Tickets
        this.total = this.purchaseOrders.reduce((a, b) => a + +b.reqQtys, 0)
        console.log(this.singlepurchaseorderdetails.indetData.Tickets)

        this.singlegateentry = response2;
        // this.FullArray = this.singlegateentry.gateData
        // this.FullArray = response2

        this.FullArray = this.singlegateentry.gateData

        console.log(this.FullArray)

        // console.log(this.FullArray.truckWeight)

      })
  }

  // onalbum(selectedalbumid: string) {
  //   console.log(selectedalbumid)
  //   // this.ngModelChange.emit(selectedalbumid);
  //   this.gateservice.getsinglegateentry(selectedalbumid).subscribe(data => {
  //     // setTimeout(() => {
  //     //   this.singleindententrydetails = data;

  //     // }, 2000);

  //     this.singlegateentry = data;


  //     // this.FullArray = this.singlegateentry.gateData
  //     // this.gateTogle = this.FullArray

  //     console.log(this.FullArray)
  //     // console.log(this.singlegateentry._id)


  //   })

  // }



}
