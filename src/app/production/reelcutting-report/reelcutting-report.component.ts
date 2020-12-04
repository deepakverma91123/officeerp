import { Component, OnInit, OnDestroy, ViewEncapsulation, ChangeDetectionStrategy, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ApiService } from 'src/app/service/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { EventEmitter } from 'events';
import { Subscription } from "rxjs";
import { ProductionServiceService } from '../production-service.service';
@Component({
  selector: 'app-reelcutting-report',
  templateUrl: './reelcutting-report.component.html',
  styleUrls: ['./reelcutting-report.component.css']
})
export class ReelcuttingReportComponent implements OnInit {
  _id: string;
  listingSub$: Subscription;
  reelsingle: any = [];
  model: any = {};
  constructor(public location: Location, private apiservice: ApiService, private productionservice: ProductionServiceService, public snackBar: MatSnackBar,
    private router: Router, private route: ActivatedRoute, private _location: Location) {
    this._id = this.route.snapshot.paramMap.get('id');
    console.log(this._id)



  }

  ngOnInit() {
    this._id = this.route.snapshot.paramMap.get('id');
    console.log(this._id)
    this.productionservice.getsinglereelcuttingentry(this._id).subscribe(data => {
      this.reelsingle = data;
      // this.f = this.allindententry;
      console.log(this.reelsingle)


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
    this.productionservice.deletereelcuttingentry(this._id).subscribe(res => {
      console.log(res);
      // this.router.navigate(["/"]);
    });
  }

}
