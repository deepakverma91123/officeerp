import { Component, OnInit, OnDestroy, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ApiService } from 'src/app/service/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GatentryServiceService } from '../gatentry-service.service';
import { PurchaseserviceService } from 'src/app/purchase/purchaseservice.service';
import { SumPipe } from '../../pipe/sum.pipe'


@Component({
  selector: 'app-gate-entry',
  templateUrl: './gate-entry.component.html',
  styleUrls: ['./gate-entry.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GateEntryComponent implements OnInit {
  selected = 'publish';
  albums: any = [];
  htmlContent = '';
  post: any;
  gateentry: any = [];
  singlepurchaseorderdetails: any = [];
  selectedCar: number;
  Unit: any = [];
  total: any;
  purchaseOrders: any = [];
  _id: string;
  model: any = {};
  constructor(public location: Location, private purchaseservice: PurchaseserviceService, private gateservice: GatentryServiceService, public snackBar: MatSnackBar,
    private router: Router, private route: ActivatedRoute, private _location: Location) {
    this._id = this.route.snapshot.paramMap.get('id');

  }

  ngOnInit() {


    this.purchaseservice.getallpurchaseorder().subscribe(data => {
      this.Unit = data;

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

    this.gateservice.addgateentry(model).subscribe(res => {

      this.gateentry = res;
      console.log('created gate entry');
      console.log(this.gateservice)
      console.log(this.gateentry)

    })


    f.resetForm();
    this.snackBar.open('saved', '', { duration: 3000 });
    this.router.navigate(['/landing']);

  }



  purchaseorders(purchaseorderid: string) {

    console.log(purchaseorderid)
    // this.ngModelChange.emit(selectedalbumid);
    this.purchaseservice.getsinglepurchaseor(purchaseorderid).subscribe(data => {
      // setTimeout(() => {
      //   this.singleindententrydetails = data;

      // }, 2000);

      this.singlepurchaseorderdetails = data;



      console.log(this.singlepurchaseorderdetails)

      this.purchaseOrders = this.singlepurchaseorderdetails.indetData.Tickets

      // total = 0;

      // for (i = 0; i < purchaseOrders.length; ++i) {
      //   total += votes[i];
      // }
      // return total;

      console.log(this.singlepurchaseorderdetails.indetData.Tickets)


    })




  }


}
