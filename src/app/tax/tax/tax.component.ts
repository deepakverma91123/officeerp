import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ApiService } from 'src/app/service/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { TaxService } from '../tax.service';
@Component({
  selector: 'app-tax',
  templateUrl: './tax.component.html',
  styleUrls: ['./tax.component.css']
})
export class TaxComponent implements OnInit {
  selected = 'publish';
  albums: any = [];
  htmlContent = '';
  alltax: any = [];
  random: string;
  randoms: string;
  possible: string;
  categoryDate: Date;
  model: any = {};
  taxDate: Date;
  constructor(public location: Location, private taxservice: TaxService, public snackBar: MatSnackBar,
    private router: Router, private route: ActivatedRoute, private _location: Location) {

  }

  ngOnInit() {
    this.taxDate = new Date();
    this.makeid();

    this.categoryDate = new Date();
    this.taxservice.getalltax().subscribe(res => {

      this.alltax = res
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
    this.randoms = "";
    this.possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++) {
      this.random += this.possible.charAt(Math.floor(Math.random() * this.possible.length));
    }

    for (var i = 0; i < 5; i++) {
      this.randoms += this.possible.charAt(Math.floor(Math.random() * this.possible.length));
    }
    console.log(this.random)
  }





  onSubmit(model, f) {
    console.log(model)
    // model.manualCode = this.random
    model.taxId = this.random


    this.taxservice.addtax(model).subscribe((res) => {
      console.log("Created a category");
    });
    // f.resetForm();
    this.snackBar.open('saved', '', { duration: 3000 });
    // this.router.navigate(['/landing']);

  }






}
