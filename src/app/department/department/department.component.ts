import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ApiService } from 'src/app/service/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { DepartmentserviceService } from '../departmentservice.service';
export interface Vegetable {
  name: string;
}
@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
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
  constructor(public location: Location, private departmentservice: DepartmentserviceService, public snackBar: MatSnackBar,
    private router: Router, private route: ActivatedRoute, private _location: Location) {

  }

  ngOnInit() {

    this.departmentservice.getalldepartment().subscribe(res => {

      this.allunitmaster = res;
      console.log(this.allunitmaster)
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

    this.departmentservice.adddepartment(model).subscribe((res) => {

    })

    f.resetForm();
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
