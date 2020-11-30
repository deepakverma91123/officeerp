import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ApiService } from 'src/app/service/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AngularEditorConfig } from '@kolkov/angular-editor';
@Component({
  selector: 'app-iteminformation',
  templateUrl: './iteminformation.component.html',
  styleUrls: ['./iteminformation.component.css']
})
export class IteminformationComponent implements OnInit {
  selected = 'publish';

  htmlContent = '';
  post: any;
  categ: any = [];



  _id: string;
  model: any = {};
  constructor(public location: Location, private apiservice: ApiService, public snackBar: MatSnackBar,
    private router: Router, private route: ActivatedRoute, private _location: Location) {

  }

  ngOnInit() {
    // this.Unit = 
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



  onSubmit(model, f) {

    this.apiservice.additeminformation(model).subscribe((res) => {
      this.post = res;
      console.log("Created a Item information");
    });
    f.resetForm();
    this.snackBar.open('saved', '', { duration: 3000 });
    // this.router.navigate(['/']);

  }





}
