import { Component, OnInit, OnDestroy, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ApiService } from 'src/app/service/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GatentryServiceService } from '../gatentry-service.service';
import { PurchaseserviceService } from 'src/app/purchase/purchaseservice.service';
import { SumPipe } from '../../pipe/sum.pipe'
import { reduce, takeUntil, mapTo } from 'rxjs/operators';
@Component({
  selector: 'app-weighmenttwo',
  templateUrl: './weighmenttwo.component.html',
  styleUrls: ['./weighmenttwo.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeighmenttwoComponent implements OnInit {
  selected = 'publish';
  albums: any = [];
  htmlContent = '';
  post: any;
  Unit: any = [];
  gate: any = [];
  indent: any = [];
  FullArray: any = [];
  singlegateentry: any = [];
  purchaseOrders: any = [];
  selectedCar: number;
  singlepurchaseorderdetails: any = [];
  singlegateentrydatails: any = [];
  cars = [
    { id: 1, name: 'Volvo' },
    { id: 2, name: 'Saab' },
    { id: 3, name: 'Opel' },
    { id: 4, name: 'Audi' },
  ];
  _id: string;
  model: any = {};
  total: number;
  constructor(public location: Location, private apiservice: ApiService, private gateservice: GatentryServiceService, private purchaseservice: PurchaseserviceService, public snackBar: MatSnackBar,
    private router: Router, private route: ActivatedRoute, private _location: Location) {
    this._id = this.route.snapshot.paramMap.get('id');

  }

  ngOnInit() {
    // this.Unit = 
    // this.albums = this.apiservice.getContacts();
    this.purchaseservice.getallpurchaseorder().subscribe(data => {
      this.Unit = data;

    })
    this.gateservice.getallgateentry().subscribe(data => {
      this.gate = data;

    })

    this.purchaseservice.getsingleindententry(this._id).subscribe(data => {

      this.indent = data
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


    this.purchaseservice.addmrnentry(model).subscribe((res) => {
      this.post = res;
      // let _id = res['_id'];

      console.log("Created a mrn");
    });
    f.resetForm();
    this.snackBar.open('saved', '', { duration: 3000 });
    this.router.navigate(['/landing']);

  }


  onalbum(selectedalbumid: string) {
    console.log(selectedalbumid)
    // this.ngModelChange.emit(selectedalbumid);
    this.gateservice.getsinglegateentry(selectedalbumid).subscribe(data => {
      // setTimeout(() => {
      //   this.singleindententrydetails = data;

      // }, 2000);

      this.singlegateentry = data;


      this.FullArray = this.singlegateentry.gateData


      console.log(this.FullArray)
      // console.log(this.singlegateentry._id)


    })

  }




}
