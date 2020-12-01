import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ApiService } from 'src/app/service/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { ProductionServiceService } from '../production-service.service';
@Component({
  selector: 'app-jumboroll-information',
  templateUrl: './jumboroll-information.component.html',
  styleUrls: ['./jumboroll-information.component.css']
})
export class JumborollInformationComponent implements OnInit {
  post: any;
  categ: any = [];
  possible: string;
  random: string;
  _id: string;
  model: any = {};
  constructor(public location: Location, private productionservice: ProductionServiceService, public snackBar: MatSnackBar,
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

  makeid() {
    this.random = "";
    this.possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++) {
      this.random += this.possible.charAt(Math.floor(Math.random() * this.possible.length));
    }
    console.log(this.random)
  }

  onSubmit(model, f) {
    model.jumboCode = this.random;
    this.productionservice.addjumborollinformation(model).subscribe((res) => {
      this.post = res;
      console.log("Created a Jumbo Roll Information");
    });
    f.resetForm();
    this.snackBar.open('saved', '', { duration: 3000 });
    // this.router.navigate(['/']);

  }





}
