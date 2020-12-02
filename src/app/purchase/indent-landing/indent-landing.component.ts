import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ApiService } from 'src/app/service/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Itemmaster } from '../../inventory/itemmaster'
import { PurchaseserviceService } from '../purchaseservice.service';
@Component({
  selector: 'app-indent-landing',
  templateUrl: './indent-landing.component.html',
  styleUrls: ['./indent-landing.component.css']
})
export class IndentLandingComponent implements OnInit {

  ItemsName: any = [];

  allindent: any = [];
  constructor(public location: Location, private apiservice: ApiService, private purchaseservice: PurchaseserviceService, public snackBar: MatSnackBar,
    private router: Router, private route: ActivatedRoute, private _location: Location) {


  }

  ngOnInit() {

    this.purchaseservice.getallindenentry().subscribe(data => {
      this.allindent = data;
      // console.log('get single' + this.allindent)
    })

  }

  back() {
    if (window.history.length > 2) {
      this._location.back();
    } else {
      this.router.navigate(['/']);
    }
  }

}