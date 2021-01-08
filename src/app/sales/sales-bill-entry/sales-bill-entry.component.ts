import { Component, OnInit, OnDestroy, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ApiService } from 'src/app/service/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { GatentryServiceService } from 'src/app/gateentry/gatentry-service.service';
import { SalesserviceService } from '../salesservice.service';
@Component({
  selector: 'app-sales-bill-entry',
  templateUrl: './sales-bill-entry.component.html',
  styleUrls: ['./sales-bill-entry.component.css']
})
export class SalesBillEntryComponent implements OnInit {
  selected = 'publish';
  post: any;
  Unit: any = [];
  Bill: any = [];
  purchaseOrders: any = [];
  singlepurchaseorderdetails: any = [];
  singlegateentrydatails: any = [];

  _id: string;
  model: any = {};
  salesOrders: any = {};
  constructor(public location: Location, private salesservice: SalesserviceService, private apiservice: ApiService, private gateservice: GatentryServiceService, public snackBar: MatSnackBar,
    private router: Router, private route: ActivatedRoute, private _location: Location) {
    this._id = this.route.snapshot.paramMap.get('id');

  }

  ngOnInit() {
    this.salesservice.getallsalesmrn().subscribe(data => {
      this.Unit = data;
      console.log(this.Unit)
      // this.Bill = this.Unit.isActive;
      // console.log('bill' + JSON.stringify(this.Unit))

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


    this.salesservice.addsalesbillentry(model).subscribe((res) => {
      this.post = res;
      // let _id = res['_id'];

      console.log("Created a Bill Entry");
    });
    f.resetForm();
    this.snackBar.open('saved', '', { duration: 3000 });
    // this.router.navigate(['/landing']);

  }


  mrnorders(mrnordersid: string) {

    console.log(mrnordersid)
    this.salesservice.getsinglesalesorderentry(mrnordersid).subscribe(data => {


      this.singlepurchaseorderdetails = data;




      this.salesOrders = this.singlepurchaseorderdetails.result
      console.log(this.singlepurchaseorderdetails.result)


    })




  }






}
