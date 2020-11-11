import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  selected = 'publish';
  albums: any = [];

  post: any;
  _id: string;
  model: any = {};
  constructor(public location: Location, private apiservice: ApiService, public snackBar: MatSnackBar,
    private router: Router, private route: ActivatedRoute, private _location: Location) {
    this._id = this.route.snapshot.paramMap.get('id');

  }

  ngOnInit() {

    // this.albums = this.apiservice.getContacts();


    this.apiservice.getproductss(this._id)
      .subscribe(data => {

        console.log(data);
        this.albums = data;
        console.log(this.albums);
      });


  }

  back() {
    if (window.history.length > 2) {
      this._location.back();
    } else {
      this.router.navigate(['/']);
    }
  }


  onSubmit(model, f) {

    this.apiservice.updateProducts(this._id, model).subscribe((res) => {
      this.post = res;
      let _id = res['_id'];
      console.log(this.post)
      console.log("Created a customer");
    });
    f.resetForm();
    this.snackBar.open('saved', '', { duration: 3000 });
    this.router.navigate(['/landing']);

  }

}