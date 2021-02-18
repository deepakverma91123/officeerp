import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ApiService } from 'src/app/service/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
export interface Vegetable {
  name: string;
}

@Component({
  selector: 'app-unit-master',
  templateUrl: './unit-master.component.html',
  styleUrls: ['./unit-master.component.css']
})
export class UnitMasterComponent implements OnInit {
  allunitmaster: any = []
  vegetables: Vegetable[] = [
    { name: 'apple' },
    { name: 'banana' },
    { name: 'strawberry' },
    { name: 'orange' },
    { name: 'kiwi' },
    { name: 'cherry' },
  ];
  _id: string;
  model: any = {};
  unitDate: Date;
  random: string;
  randoms: string;
  possible: string;
  constructor(public location: Location, private apiservice: ApiService, public snackBar: MatSnackBar,
    private router: Router, private route: ActivatedRoute, private _location: Location) {

  }

  ngOnInit() {

    this.unitDate = new Date();
    this.apiservice.getallunitmaster().subscribe(res => {

      this.allunitmaster = res
    })



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

  back() {
    if (window.history.length > 2) {
      this._location.back();
    } else {
      this.router.navigate(['/']);
    }
  }

  onSubmit(model, f) {

    model.unitId = this.random;
    model.mannualCode = this.randoms;
    model.unitDate = this.unitDate;


    this.apiservice.unitmasteradd(model).subscribe((res) => {
      console.log('created unit master')
      console.log(res);
    })

    // f.resetForm();
    this.snackBar.open('saved', '', { duration: 3000 });
    // this.router.navigate(['/landing']);

  }

  drop(event: CdkDragDrop<Vegetable[]>) {
    moveItemInArray(this.vegetables, event.previousIndex, event.currentIndex);
  }


  // removeListing() {
  //   this._id = this.route.snapshot.paramMap.get("id");
  //   this.apiservice(this._id).subscribe(res => {
  //     console.log(res);
  //     this.router.navigate(["/"]);
  //   });
  // }

}
