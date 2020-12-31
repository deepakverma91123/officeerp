import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomerserviceService } from '../customerservice.service';
@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  _id: string;
  model: any = {};
  constructor(public location: Location, private customerservice: CustomerserviceService, public snackBar: MatSnackBar,
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
    // if (model.itemDate) {
    //   this.model.itemDate = model.itemDate.toDate();
    // }

    this.customerservice.addcustomer(model).subscribe(res => {
      // let _id = res['_id'];

      console.log("Created a  customer");
    });
    f.resetForm();
    this.snackBar.open('saved', '', { duration: 3000 });
    // this.router.navigate(['/itemmasterlanding']);

  }




}

