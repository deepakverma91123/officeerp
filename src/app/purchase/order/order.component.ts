import { Component, OnInit, OnDestroy, ViewEncapsulation, ChangeDetectionStrategy, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ApiService } from 'src/app/service/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { PurchaseserviceService } from '../purchaseservice.service';
import { Indententry } from '../indententry'
import { EventEmitter } from 'events';
import { SupplierserviceService } from 'src/app/supplier/supplierservice.service';
import { TaxService } from 'src/app/tax/tax.service';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderComponent implements OnInit {
  @Output() public ngModelChange = new EventEmitter();
  selected = 'publish';
  albums: any = [];
  htmlContent = '';
  updateId: string;
  post: any;
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
  total: string;
  allSupplier: any = [];
  singleSupplier: any = {};
  model: any = {};
  purchaseDate: Date;
  allTax: any = [];
  constructor(public location: Location, private taxservice: TaxService, private supplierservice: SupplierserviceService, private apiservice: ApiService, private purchaseservice: PurchaseserviceService, public snackBar: MatSnackBar,
    private router: Router, private route: ActivatedRoute, private _location: Location) {
    this._id = this.route.snapshot.paramMap.get('id');


    this.purchaseservice.getallindenentry().subscribe(data => {
      this.allindententry = data;
      console.log(this.allindententry)


    })

  }

  ngOnInit() {
    this.makeID();
    this.purchaseDate = new Date();
    // this.Unit = 
    // this.albums = this.apiservice.getContacts();

    // this.purchaseservice.getsingleindententry(_id).subscribe(data => {
    //   this.singleindententry = data;

    // })
    // this.onalbum(this.selectedalbumid);

    this.supplierservice.getallsupplier().subscribe(res => {
      this.allSupplier = res;

    })

    this.taxservice.getalltax().subscribe(res => {
      this.allTax = res;
    })



    this.apiservice.getproductss(this._id)
      .subscribe(data => {

        console.log(data);
        this.albums = data;
        console.log(this.albums);
      });


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
    // return this.random;
    // console.log(this.random)
  }

  onSubmit(model, f) {
    model.updateId = this.updateId;
    model.singleindententrydetails = this.singleindententrydetails;
    console.log(model.updateId);
    // console.log(model.singleindententrydetails);
    model.orderNumber = this.random;
    model.purchaseorderId = this.random;
    model.purchaseDate = this.purchaseDate;
    this.purchaseservice.additemmaster(model).subscribe(res => {
      this.post = res;
      console.log(this.post)
      // let _id = res['_id'];

      console.log("Created a purchase order");
    });

    this.purchaseservice.editsingleindententry(model.updateId, model.singleindententrydetails).subscribe(res => {
      // model.singleindententrydetails.finalSubmit = '1';
      this.singleindententrydetails.finalSubmit = 1;
      console.log('upfated');
      console.log(res);
      // this.post.stockUnit = this.stockUnit - model.itemQuantity


    })

    f.resetForm();
    this.snackBar.open('saved', '', { duration: 3000 });
    // this.router.navigate(['/landing']);

  }

  onalbum(selectedalbumid: string) {
    this.updateId = selectedalbumid
    console.log(selectedalbumid)
    // this.ngModelChange.emit(selectedalbumid);
    this.purchaseservice.getsingleindententry(selectedalbumid).subscribe(data => {
      this.singleindententrydetails = data;



      this.FullArray = this.singleindententrydetails.Tickets;
      // if (!this.FullArray) {
      //   this.FullArray = [];
      //   // this.model.Tickets = this.inputValue
      // }
      // this.FullArray.push(this.FullArray);
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
  supplier(supplierid) {
    this.supplierservice.getsinglesupplier(supplierid).subscribe(res => {
      this.singleSupplier = res;

    })
  }

}
