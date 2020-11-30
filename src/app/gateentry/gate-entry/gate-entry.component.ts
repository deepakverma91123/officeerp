import { Component, OnInit, OnDestroy, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ApiService } from 'src/app/service/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GatentryServiceService } from '../gatentry-service.service';
import { PurchaseserviceService } from 'src/app/purchase/purchaseservice.service';
import { SumPipe } from '../../pipe/sum.pipe'
import { zip } from "rxjs";

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
  singlegateentry: any = [];
  FullArray: any = [];
  _id: string;
  model: any = {};
  showForm: boolean;
  blank: any = [];
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

    // if (this.FullArray) {

    //   console.log('update')
    //   // this.router.navigate(['/detail', this.id, 'bank-detail', 'edit'], { queryParams: { urlType: 'registration' } });
    // } else {
    //   this.gateservice.addgateentry(model).subscribe(res => {

    //     this.gateentry = res;
    //     console.log('created gate entry');
    //     console.log(this.gateservice)
    //     console.log(this.gateentry)

    //   })

    // }

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



    this.gateservice.getsinglegateentry(purchaseorderid).subscribe(data => {
      // setTimeout(() => {
      //   this.singleindententrydetails = data;

      // }, 2000);

      this.singlegateentry = data;


      // this.FullArray = this.singlegateentry.gateData


      console.log('hii gate' + this.singlegateentry)
      // console.log(this.singlegateentry._id)


    })



  }


  myFun(purchaseorderid) {
    // this.showForm = !this.showForm;

    zip(this.purchaseservice.getsinglepurchaseor(purchaseorderid), this.gateservice.getsinglegateentry(purchaseorderid))
      .subscribe(([response1, response2]) => {
        // console.log(response1);
        // console.log(response2);

        this.singlepurchaseorderdetails = response1;



        console.log(this.singlepurchaseorderdetails)

        this.purchaseOrders = this.singlepurchaseorderdetails.indetData.Tickets

        this.singlegateentry = response2;
        // this.FullArray = this.singlegateentry.gateData
        this.FullArray = response2



        if (this.FullArray) {
          this.FullArray = this.singlegateentry.gateData


        }
        else {
          this.FullArray = [];
          // this.showForm = !this.showForm;

          console.log('empty' + this.FullArray);

        }

        console.log(this.FullArray)

        // console.log(this.FullArray.truckWeight)

      })
  }


  showEdit() {
    this.showForm = !this.showForm;
  }

  onUpdate(model) {
    console.log(model)
    model.productWeight = model.productWeight;
    this._id = this.route.snapshot.paramMap.get("id");

    this.gateservice.editsinglegateentry(this._id, this.model).subscribe(data => {
      console.log('update')
      console.log('model  update')
      // this.router.navigate(['/landing']);

    })



  }

}
