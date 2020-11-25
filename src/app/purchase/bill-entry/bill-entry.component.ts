import { Component, OnInit, OnDestroy, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ApiService } from 'src/app/service/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { PurchaseserviceService } from '../purchaseservice.service';
import { GatentryServiceService } from 'src/app/gateentry/gatentry-service.service';
@Component({
  selector: 'app-bill-entry',
  templateUrl: './bill-entry.component.html',
  styleUrls: ['./bill-entry.component.css']
})
export class BillEntryComponent implements OnInit {
  selected = 'publish';
  albums: any = [];
  htmlContent = '';
  post: any;
  Unit: any = [];
  gate: any = [];
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
  model: any = {};
  constructor(public location: Location, private apiservice: ApiService, private gateservice: GatentryServiceService, private purchaseservice: PurchaseserviceService, public snackBar: MatSnackBar,
    private router: Router, private route: ActivatedRoute, private _location: Location) {
    this._id = this.route.snapshot.paramMap.get('id');

  }

  ngOnInit() {
    // this.Unit = 
    // this.albums = this.apiservice.getContacts();
    this.purchaseservice.getallpurchaseorder().subscribe(data => {
      this.Unit = data;

    })
    this.gateservice.getallgateentry().subscribe(data => {
      this.gate = data;

    })

    this.purchaseservice.getsingleindententry(this._id).subscribe(data => {

      this.indent = data
    })

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

  onSubmit(model, f) {


    this.purchaseservice.addmrnentry(model).subscribe((res) => {
      this.post = res;
      // let _id = res['_id'];

      console.log("Created a mrn");
    });
    f.resetForm();
    this.snackBar.open('saved', '', { duration: 3000 });
    this.router.navigate(['/landing']);

  }


  purchaseorders(purchaseorderid: string) {

    console.log(purchaseorderid)
    // this.ngModelChange.emit(selectedalbumid);
    this.purchaseservice.getsinglepurchaseor(purchaseorderid).subscribe(data => {
      // setTimeout(() => {
      //   this.singleindententrydetails = data;

      // }, 2000);

      this.singlepurchaseorderdetails = data;



      console.log(this.singlepurchaseorderdetails)

      this.purchaseOrders = this.singlepurchaseorderdetails.indetData.Tickets

      console.log(this.singlepurchaseorderdetails.indetData.Tickets)


    })

    // this.gateservice.getsinglegateentry(purchaseorderid).subscribe(res => {
    //   this.singlegateentrydatails = res;
    //   console.log('hiii' + this.singlegateentrydatails)
    //   console.log(this.singlegateentrydatails.gateData)

    // })



  }


  onalbum(selectedalbumid: string) {
    console.log(selectedalbumid)
    // this.ngModelChange.emit(selectedalbumid);
    this.gateservice.getsinglegateentry(selectedalbumid).subscribe(data => {
      // setTimeout(() => {
      //   this.singleindententrydetails = data;

      // }, 2000);

      this.singlegateentry = data;


      this.FullArray = this.singlegateentry.gateData


      console.log(this.FullArray)
      // console.log(this.singlegateentry._id)


    })

  }



}
