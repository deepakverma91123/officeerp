import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from 'src/app/service/api.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  model: any = {};
  errorMessage = '';
  message = '';
  loading = false;
  selected = 'publish';
  albums;
  post: any;
  constructor(public location: Location, private apiservice: ApiService, public snackBar: MatSnackBar,
    private router: Router, private route: ActivatedRoute, private _location: Location) {

  }

  ngOnInit(): void {
  }



  back() {
    if (window.history.length > 2) {
      this._location.back();
    } else {
      this.router.navigate(['/']);
    }
  }

  signup(model) {

    this.apiservice.signup(model).subscribe((res) => {
      this.post = res;
      console.log("Created a customer");
    });
    this.snackBar.open('saved', '', { duration: 3000 });
    this.router.navigate(['/login']);

  }

}
