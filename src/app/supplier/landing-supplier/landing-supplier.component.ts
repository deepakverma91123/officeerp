import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
// import { ProductionServiceService } from '../production-service.service';
import { ApiService } from '../../service/api.service'
import { SupplierserviceService } from '../supplierservice.service';
@Component({
  selector: 'app-landing-supplier',
  templateUrl: './landing-supplier.component.html',
  styleUrls: ['./landing-supplier.component.css']
})
export class LandingSupplierComponent implements OnInit {

  ItemsName: any = [];
  search: any = {};
  allitemmaster: any = [];
  term = '';
  constructor(public location: Location, private supplierservice: SupplierserviceService, private apiservice: ApiService, public snackBar: MatSnackBar,
    private router: Router, private route: ActivatedRoute, private _location: Location) {


  }

  ngOnInit() {
    this.supplierservice.getallsupplier().subscribe(data => {
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
  // applyFilter(value) {
  //   // const filterValue = (event.target as HTMLInputElement).value;
  //   // this.allitemmaster.filter = filterValue.trim().toLowerCase();

  //   console.log(value)
  //   this.apiservice.searchitemmaster(value).subscribe(data => {
  //     this.search = data;
  //     console.log(this.search)
  //   })

  // }

}