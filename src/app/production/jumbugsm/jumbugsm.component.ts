import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ApiService } from 'src/app/service/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ProductionServiceService } from '../production-service.service';
@Component({
  selector: 'app-jumbugsm',
  templateUrl: './jumbugsm.component.html',
  styleUrls: ['./jumbugsm.component.css']
})
export class JumbugsmComponent implements OnInit {
  selected = 'publish';
  albums: any = [];
  htmlContent = '';
  allgsm: any = [];
  random: string;
  possible: string;

  model: any = {};
  constructor(public location: Location, private productionservice: ProductionServiceService, private apiservice: ApiService, public snackBar: MatSnackBar,
    private router: Router, private route: ActivatedRoute, private _location: Location) {

  }

  ngOnInit() {

    this.productionservice.getjumbugsm().subscribe(res => {

      this.allgsm = res
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
    // model.manualCode = this.random

    this.productionservice.addjumbugsm(model).subscribe((res) => {
      console.log("Created a category");
    });
    f.resetForm();
    this.snackBar.open('saved', '', { duration: 3000 });
    // this.router.navigate(['/landing']);

  }






}
