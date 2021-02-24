import { Component, OnInit, OnDestroy, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ApiService } from 'src/app/service/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { PurchaseserviceService } from '../purchaseservice.service';
import { GatentryServiceService } from 'src/app/gateentry/gatentry-service.service';
import { zip } from "rxjs";
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SupplierserviceService } from 'src/app/supplier/supplierservice.service';
import { OrderfinalComponent } from 'src/app/dialog/orderfinal/orderfinal.component';

@Component({
  selector: 'app-mrn-entry',
  templateUrl: './mrn-entry.component.html',
  styleUrls: ['./mrn-entry.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MrnEntryComponent implements OnInit {
  selected = 'publish';
  albums: any = [];
  htmlContent = '';
  post: any;
  Unit: any = [];
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
  mrnDate: Date;
  updateId: string;
  netAmount: any = {}
  allSupplier: any = [];
  changevalue: string;
  supplierorder: any = [];


  title = 'angular-material-tree-tutorial';

  dialogValue: string;
  sendValue: string;


  constructor(public location: Location, public dialog: MatDialog, private matDialog: MatDialog, private supplierservice: SupplierserviceService, private apiservice: ApiService, private gateservice: GatentryServiceService, private purchaseservice: PurchaseserviceService, public snackBar: MatSnackBar,
    private router: Router, private route: ActivatedRoute, private _location: Location) {
    this._id = this.route.snapshot.paramMap.get('id');

  }

  ngOnInit() {
    this.makeID();
    this.mrnDate = new Date();

    // this.Unit = 
    // this.albums = this.apiservice.getContacts();
    this.purchaseservice.getallpurchaseorder().subscribe(data => {
      this.Unit = data;

    })

    this.supplierservice.getallsupplier().subscribe(res => {
      this.allSupplier = res;

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
  Change(value) {
    console.log(value);
    this.changevalue = value;
    console.log(this.changevalue);
    this.purchaseservice.supplierbehalfpurchaseorder(this.changevalue).subscribe(data => {
      this.supplierorder = data;
      console.log(this.supplierorder);
    })
    // this.apiservice.categorybehalfitemmaster(this.changevalue).subscribe(data => {
    //   this.ItemsName = data;
    //   console.log(this.ItemsName)

    // })


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

  openDialog(value, id) {
    console.log(value);
    console.log(id)
    const dialogRef = this.dialog.open(OrderfinalComponent, {
      // max-width: 100vw!important
      maxWidth: '100vw',
      maxHeight: '100vh',
      hasBackdrop: true,
      width: '350px',
      data: { pageValue: value, id }


    }

    );
    console.log(dialogRef);


    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.dialogValue = result.data;
      console.log(this.dialogValue);
    });



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
    model.mrnNumber = this.random;
    model.updateId = this.updateId;
    model.purchaseOrders = this.purchaseOrders;
    console.log(model.purchaseOrders);

    console.log(model.updateId);
    this.purchaseservice.addmrnentry(model).subscribe((res) => {
      this.post = res;
      // let _id = res['_id'];

      console.log("Created a mrn");
    });



    this.purchaseservice.updatepurchaseorder(model.updateId, model.purchaseOrders).subscribe(res => {
      // model.singleindententrydetails.finalSubmit = '1';
      // this.singlepurchaseorderdetails.finalSubmit = 1;
      console.log('upfated');
      console.log(res);
      // this.post.stockUnit = this.stockUnit - model.itemQuantity


    })

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
    this.updateId = purchaseorderid
    zip(this.purchaseservice.getsinglepurchaseor(purchaseorderid), this.gateservice.getsinglegateentry(purchaseorderid))
      .subscribe(([response1, response2]) => {

        this.singlepurchaseorderdetails = response1;
        this.netAmount = this.singlepurchaseorderdetails.purchaseorder
        console.log(this.singlepurchaseorderdetails.purchaseorder);
        // this.singlepurchaseorderdetails.forEach(element => console.log(element));

        console.log('pu' + this.singlepurchaseorderdetails);
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
