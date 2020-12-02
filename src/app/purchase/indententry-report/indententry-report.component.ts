import { Component, OnInit, OnDestroy, ViewEncapsulation, ChangeDetectionStrategy, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ApiService } from 'src/app/service/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { PurchaseserviceService } from '../purchaseservice.service';
import { Indententry } from '../indententry'
import { EventEmitter } from 'events';
import { Subscription } from "rxjs";
@Component({
  selector: 'app-indententry-report',
  templateUrl: './indententry-report.component.html',
  styleUrls: ['./indententry-report.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IndententryReportComponent implements OnInit {
  @Output() public ngModelChange = new EventEmitter();
  indentreport: any = [];
  singleindententry: any = [];
  singleindententrydetails: any = [];
  _id: string;
  listingSub$: Subscription;
  model: any = {};
  constructor(public location: Location, private apiservice: ApiService, private purchaseservice: PurchaseserviceService, public snackBar: MatSnackBar,
    private router: Router, private route: ActivatedRoute, private _location: Location) {
    this._id = this.route.snapshot.paramMap.get('id');
    console.log(this._id)

  }

  ngOnInit() {
    this._id = this.route.snapshot.paramMap.get('id');
    console.log(this._id)
    this.purchaseservice.getsingleindententry(this._id).subscribe(data => {
      this.indentreport = data;
      // this.f = this.allindententry;
      console.log(this.indentreport.indentNumber)


    })




  }
  // ngOnDestroy() {
  //   this.listingSub$.unsubscribe();
  // }

  back() {
    if (window.history.length > 2) {
      this._location.back();
    } else {
      this.router.navigate(['/']);
    }
  }





  removeListing() {
    this._id = this.route.snapshot.paramMap.get("id");
    this.purchaseservice.deleteindententry(this._id).subscribe(res => {
      console.log(res);
      this.router.navigate(["/"]);
    });
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


}
