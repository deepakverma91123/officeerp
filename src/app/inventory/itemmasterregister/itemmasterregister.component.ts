import { Component, OnInit, OnDestroy, ViewEncapsulation, ChangeDetectionStrategy, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ApiService } from 'src/app/service/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductionServiceService } from 'src/app/production/production-service.service';
@Component({
  selector: 'app-itemmasterregister',
  templateUrl: './itemmasterregister.component.html',
  styleUrls: ['./itemmasterregister.component.css']
})
export class ItemmasterregisterComponent implements OnInit {
  model: any = {};
  Itemcategory: any = [];
  ItemsName: any = [];
  constructor(public location: Location, private apiservice: ApiService, private productionservice: ProductionServiceService, public snackBar: MatSnackBar,
    private router: Router, private route: ActivatedRoute, private _location: Location) {




  }

  ngOnInit() {

    this.apiservice.getallcategory().subscribe(data => {
      this.Itemcategory = data;

    })

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
    if (model.fromDate) {
      this.model.fromDate = model.fromDate.toDate();
    }

    if (model.toDate) {
      this.model.toDate = model.toDate.toDate();
    }

    this.apiservice.itemmasterfilter(model).subscribe(res => {
      console.log(res)

    })

    console.log(model)

    this.snackBar.open('saved', '', { duration: 3000 });
    // this.router.navigate(['/landing']);

  }
}