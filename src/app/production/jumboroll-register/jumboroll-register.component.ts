import { Component, OnInit, OnDestroy, ViewEncapsulation, ChangeDetectionStrategy, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ApiService } from 'src/app/service/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { PurchaseserviceService } from '../../purchase/purchaseservice.service';
import { EventEmitter } from 'events';
import { ProductionServiceService } from 'src/app/production/production-service.service';
@Component({
  selector: 'app-jumboroll-register',
  templateUrl: './jumboroll-register.component.html',
  styleUrls: ['./jumboroll-register.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JumborollRegisterComponent implements OnInit {
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
  alljumbu: any = [];
  allCustomer: any = [];
  todateval: '';
  fromdateval: '';
  itemtypeval: '';
  brightnessval: '';
  gsmval: '';
  qualityval: '';
  inputValue: '';
  inputValjumbu: '';
  singleCustomer: any = {};
  constructor(public location: Location, private productionservice: ProductionServiceService, public snackBar: MatSnackBar,
    private router: Router, private route: ActivatedRoute, private _location: Location) {
    this._id = this.route.snapshot.paramMap.get('id');




  }

  ngOnInit() {
    this.productionservice.getjumborollentry().subscribe(data => {
      this.alljumbu = data;
      console.log(this.alljumbu)


    })




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
    if (model.fromDate) {
      this.model.fromDate = model.fromDate.toDate();
    }

    if (model.toDate) {
      this.model.toDate = model.toDate.toDate();
    }

    this.productionservice.jumbufilter(model).subscribe(res => {
      console.log(res)

    })

    console.log(model)

    this.snackBar.open('saved', '', { duration: 3000 });
    // this.router.navigate(['/landing']);

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
  // onKey(event) {
  //   this.inputValue = event.target.value;
  //   event.brightnessval = this.brightnessval;
  //   console.log(event.brightnessval);
  //   event.gsmval = this.gsmval;
  //   console.log(event.gsmval);
  //   event.qualityval = this.qualityval;
  //   console.log(event.qualityval);

  //   // event.qualityval = this.qualityval;
  //   // this.brightnessval = this.brightnessval
  //   // console.log(inputValue)
  //   // console.log(this.brightnessval);


  //   this.salesservice.getallsalesorderquery(this.inputValue, event.brightnessval, event.qualityval, event.gsmval).subscribe(res => {
  //     // console.log(res)
  //     this.search = res
  //     console.log(this.search)


  //     for (let i = 0; i <= this.search; i++) {
  //       this.salesDetails = this.search;

  //     }
  //     // this.salesDetails = this.search;
  //     // console.log(this.salesDetails)
  //   })

  // }


  fromdateKey(event) {
    this.fromdateval = event.target.value;
    console.log(this.fromdateval)
  }
  todateKey(event) {
    this.todateval = event.target.value;
    console.log(this.todateval)
  }

  itemtypeValue(event) {
    this.itemtypeval = event;
    console.log(this.itemtypeval);
    console.log('hiii');

  }

  brightnessValue(event) {
    this.brightnessval = event;
    console.log(this.brightnessval);


  }
  gsmValue(event) {
    this.gsmval = event;
    console.log(this.gsmval)
  }
  qualityValue(event) {
    this.qualityval = event;
    console.log(this.qualityval);

  }

  onAddRell(value) {

    console.log("the selected value is " + value);
  }





}
