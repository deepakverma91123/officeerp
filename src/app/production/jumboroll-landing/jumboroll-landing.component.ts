import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
// import { ProductionServiceService } from '../production-service.service';
import { ApiService } from '../../service/api.service'
import { ProductionServiceService } from '../production-service.service';
@Component({
  selector: 'app-jumboroll-landing',
  templateUrl: './jumboroll-landing.component.html',
  styleUrls: ['./jumboroll-landing.component.css']
})
export class JumborollLandingComponent implements OnInit {
  term = '';
  ItemsName: any = [];
  search: any = {};
  alljumborollentry: any = [];
  constructor(public location: Location, private productionservice: ProductionServiceService, public snackBar: MatSnackBar,
    private router: Router, private route: ActivatedRoute, private _location: Location) {


  }

  ngOnInit() {
    this.productionservice.getjumborollentry().subscribe(data => {
      this.alljumborollentry = data;
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
  applyFilter(value) {
    // const filterValue = (event.target as HTMLInputElement).value;
    // this.allitemmaster.filter = filterValue.trim().toLowerCase();



  }

}