import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ApiService } from 'src/app/service/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-supplier-information',
  templateUrl: './supplier-information.component.html',
  styleUrls: ['./supplier-information.component.css']
})
export class SupplierInformationComponent implements OnInit {
  selected = 'publish';
  albums: any = [];
  htmlContent = '';
  categ: any = [];
  random: string;
  possible: string;

  model: any = {};
  constructor(public location: Location, private apiservice: ApiService, public snackBar: MatSnackBar,
    private router: Router, private route: ActivatedRoute, private _location: Location) {

  }

  ngOnInit() {

    this.apiservice.getallcategory().subscribe(data => {
      this.categ = data;

    })
  }

  back() {
    if (window.history.length > 2) {
      this._location.back();
    } else {
      this.router.navigate(['/']);
    }
  }
  makeid() {
    this.random = "";
    this.possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++) {
      this.random += this.possible.charAt(Math.floor(Math.random() * this.possible.length));
    }
    console.log(this.random)
  }




  onSubmit(model, f) {
    console.log(model)
    model.manualCode = this.random

    this.apiservice.addsupplierinformation(model).subscribe((res) => {
      console.log("Created a supplier information");
    });
    f.resetForm();
    this.snackBar.open('saved', '', { duration: 3000 });
    // this.router.navigate(['/landing']);

  }






}
