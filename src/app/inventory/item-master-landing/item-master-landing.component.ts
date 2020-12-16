import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
// import { ProductionServiceService } from '../production-service.service';
import { ApiService } from '../../service/api.service'
@Component({
  selector: 'app-item-master-landing',
  templateUrl: './item-master-landing.component.html',
  styleUrls: ['./item-master-landing.component.css']
})
export class ItemMasterLandingComponent implements OnInit {

  ItemsName: any = [];

  allitemmaster: any = [];
  constructor(public location: Location, private apiservice: ApiService, public snackBar: MatSnackBar,
    private router: Router, private route: ActivatedRoute, private _location: Location) {


  }

  ngOnInit() {
    this.apiservice.getallitemmaster().subscribe(data => {
      this.allitemmaster = data;
      // console.log('this.allindent)
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