import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { ConsumptionserviceService } from '../consumptionservice.service';
// import { ProductionServiceService } from '../production-service.service';
@Component({
  selector: 'app-landing-consumption',
  templateUrl: './landing-consumption.component.html',
  styleUrls: ['./landing-consumption.component.css']
})
export class LandingConsumptionComponent implements OnInit {

  ItemsName: any = [];
  search: any = {};
  allconsumption: any = [];
  term = '';
  constructor(public location: Location, private cosumptionservice: ConsumptionserviceService, public snackBar: MatSnackBar,
    private router: Router, private route: ActivatedRoute, private _location: Location) {


  }

  ngOnInit() {
    this.cosumptionservice.getallconsumption().subscribe(data => {
      this.allconsumption = data;
      console.log(this.allconsumption)
    })

  }

  back() {
    if (window.history.length > 2) {
      this._location.back();
    } else {
      this.router.navigate(['/']);
    }
  }
  // applyFilter(value) {
  //   // const filterValue = (event.target as HTMLInputElement).value;
  //   // this.allitemmaster.filter = filterValue.trim().toLowerCase();

  //   console.log(value)
  //   this.apiservice.searchitemmaster(value).subscribe(data => {
  //     this.search = data;
  //     console.log(this.search)
  //   })

  // }

}