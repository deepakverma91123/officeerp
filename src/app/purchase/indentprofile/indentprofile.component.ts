import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ApiService } from 'src/app/service/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Itemmaster } from '../../inventory/itemmaster'
import { PurchaseserviceService } from '../purchaseservice.service';
@Component({
  selector: 'app-indentprofile',
  templateUrl: './indentprofile.component.html',
  styleUrls: ['./indentprofile.component.css']
})
export class IndentprofileComponent implements OnInit {
  selected = 'publish';
  albums: any = [];
  htmlContent = '';
  categ: any = [];
  random: string;
  possible: string;
  _id: string

  model: any = {};
  constructor(public location: Location, private purchaseservice: PurchaseserviceService, public snackBar: MatSnackBar,
    private router: Router, private route: ActivatedRoute, private _location: Location) {

    this._id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {

    this.purchaseservice.getsingleindentprofile(this._id).subscribe(data => {
      this.categ = data;

    })
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
    model.manualCode = this.random

    this.purchaseservice.addindentprofile(model).subscribe((res) => {
      console.log("Created a indenter profile ");
    });
    f.resetForm();
    this.snackBar.open('saved', '', { duration: 3000 });
    // this.router.navigate(['/landing']);

  }






}
