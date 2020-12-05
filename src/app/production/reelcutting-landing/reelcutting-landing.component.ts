import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ApiService } from 'src/app/service/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { ProductionServiceService } from '../production-service.service';
@Component({
  selector: 'app-reelcutting-landing',
  templateUrl: './reelcutting-landing.component.html',
  styleUrls: ['./reelcutting-landing.component.css']
})
export class ReelcuttingLandingComponent implements OnInit {

  ItemsName: any = [];

  allreelcutting: any = [];
  constructor(public location: Location, private apiservice: ApiService, private productionservice: ProductionServiceService, public snackBar: MatSnackBar,
    private router: Router, private route: ActivatedRoute, private _location: Location) {


  }

  ngOnInit() {
    this.productionservice.getreelcuttingentry().subscribe(data => {
      this.allreelcutting = data;
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