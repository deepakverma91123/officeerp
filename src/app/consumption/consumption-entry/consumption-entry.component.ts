import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConsumptionserviceService } from '../consumptionservice.service';
import { ApiService } from 'src/app/service/api.service';
@Component({
  selector: 'app-consumption-entry',
  templateUrl: './consumption-entry.component.html',
  styleUrls: ['./consumption-entry.component.css']
})
export class ConsumptionEntryComponent implements OnInit {
  selected = 'publish';
  albums: any = [];
  htmlContent = '';
  categ: any = [];
  random: string;
  possible: string;
  ItemsName: any = [];
  singleiteminformation: any = [];
  model: any = {};
  stockUnit: any = {};
  value: Number;
  si: Number;
  _id: string;
  Mi: Number;
  post: any = {};
  alldata: any = {};
  constructor(public location: Location, private apiservice: ApiService, private consumptionservice: ConsumptionserviceService, public snackBar: MatSnackBar,
    private router: Router, private route: ActivatedRoute, private _location: Location) {

  }

  ngOnInit() {
    this.apiservice.getallitemmaster().subscribe(data => {
      this.ItemsName = data;
      console.log(this.ItemsName)

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
    console.log(model)

    this.consumptionservice.addconsumption(model).subscribe((res) => {
      console.log("Created a consumption");
    });

    this.alldata.stockUnit = this.stockUnit - model.itemQuantity;

    this.apiservice.updateitemmaster(this._id, this.alldata).subscribe(res => {
      console.log('updated')
      console.log(res);
      this.post = res;
      // this.post.stockUnit = this.stockUnit - model.itemQuantity

      console.log(this.alldata.stockUnit);

    })
    f.resetForm();
    this.snackBar.open('saved', '', { duration: 3000 });
    // this.router.navigate(['/landing']);

  }


  onalbum(selectedalbumid) {
    // console.log(index)
    console.log(selectedalbumid)
    // this.ngModelChange.emit(selectedalbumid);
    this.apiservice.getsingleitemmaster(selectedalbumid).subscribe(data => {


      this.singleiteminformation = data;
      this.alldata = this.singleiteminformation.result;
      console.log(this.singleiteminformation.result);

      this.stockUnit = this.singleiteminformation.result.stockUnit;
      this._id = this.singleiteminformation.result._id;
      console.log(this._id);

    })

  }


  onKey(value: Number) {
    console.log(this.value = value);
    this.value = value
    this.si = this.value;
    console.log(this.si)
    // console.log(this.model.productWeight = this.value)

  }


}
