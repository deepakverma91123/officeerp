import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error: string;
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

  onSubmit(model) {

    this.apiservice.signin(model).subscribe((res) => {
      this.post = res;
      console.log("login success");
    });
    this.snackBar.open('saved', '', { duration: 3000 });
    // this.router.navigate(['/dashboard']);
  }

  // login(){
  //   this.authService.validate(this.userEmail, this.userPassword)
  //   .then((response) => {
  //     this.authService.setUserInfo({'user' : response['user']});
  //     this.router.navigate(['home']);

  //   })
  // }





}