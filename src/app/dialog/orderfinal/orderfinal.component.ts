// import { Component, OnInit } from '@angular/core';

import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-orderfinal',
  templateUrl: './orderfinal.component.html',
  styleUrls: ['./orderfinal.component.css']
})
export class OrderfinalComponent implements OnInit {


  fromPage: any;
  fromDialog: string;

  model: any = {};
  shortquantity: any;
  finalshortquantity: any;
  constructor(
    public dialogRef: MatDialogRef<OrderfinalComponent>, public location: Location, private apiservice: ApiService, public snackBar: MatSnackBar,
    private router: Router, private route: ActivatedRoute, private _location: Location,

    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.fromPage = data.pageValue;
    console.log('this' + this.fromPage);
  }

  ngOnInit() {
  }

  closeDialog() {
    this.dialogRef.close({ event: 'close', data: this.fromDialog, });
  }
  back() {
    if (window.history.length > 2) {
      this._location.back();
    } else {
      this.router.navigate(['/']);
    }
  }
  onKey(value) {
    console.log(value);
    this.shortquantity = value;
    // this.fromPage - this.shortquantity
    this.finalshortquantity = this.fromPage - this.shortquantity
    console.log(this.fromPage - this.shortquantity);
  }

  onSubmit(model, f) {
    console.log(model)

    f.resetForm();

  }
}
