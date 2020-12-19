import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConsumptionserviceService } from '../consumptionservice.service';
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

  model: any = {};
  constructor(public location: Location, private consumptionservice: ConsumptionserviceService, public snackBar: MatSnackBar,
    private router: Router, private route: ActivatedRoute, private _location: Location) {

  }

  ngOnInit() {


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
    f.resetForm();
    this.snackBar.open('saved', '', { duration: 3000 });
    // this.router.navigate(['/landing']);

  }






}
