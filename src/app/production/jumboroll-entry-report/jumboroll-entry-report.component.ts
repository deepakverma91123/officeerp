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
  selector: 'app-jumboroll-entry-report',
  templateUrl: './jumboroll-entry-report.component.html',
  styleUrls: ['./jumboroll-entry-report.component.css']
})
export class JumborollEntryReportComponent implements OnInit {
  @Output() public ngModelChange = new EventEmitter();
  itemmaster: any = {};
  itemM: any = {};
  singleindententry: any = [];
  singleindententrydetails: any = [];
  _id: string;
  showForm: boolean; u
  listingSub$: Subscription;
  model: any = {};
  categ: any = [];
  information: any = [];
  constructor(public location: Location, private productionservice: ProductionServiceService, public snackBar: MatSnackBar,
    private router: Router, private route: ActivatedRoute, private _location: Location) {
    this._id = this.route.snapshot.paramMap.get('id');
    console.log(this._id)

  }

  ngOnInit() {
    this._id = this.route.snapshot.paramMap.get('id');
    console.log(this._id)
    this.productionservice.getsinglejumborollentry(this._id).subscribe(data => {
      this.itemM = data;
      // this.itemmaster = this.itemM.result
      // this.f = this.allindententry;
      console.log(this.itemM)


    })

    // this.apiservice.getallcategory().subscribe(data => {
    //   this.categ = data;

    // })

    // this.apiservice.getalliteminformation().subscribe(data => {
    //   this.information = data;

    // })


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

  removeItemmaster() {
    this._id = this.route.snapshot.paramMap.get("id");
    this.productionservice.deletejumborollentry(this._id).subscribe(res => {
      console.log(res);
      // this.router.navigate(["/"]);
    });

  }







  showEdit() {
    this.showForm = !this.showForm;
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
