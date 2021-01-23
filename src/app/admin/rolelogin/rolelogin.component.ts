import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { RoleserviceService } from '../roleservice.service';
@Component({
  selector: 'app-rolelogin',
  templateUrl: './rolelogin.component.html',
  styleUrls: ['./rolelogin.component.css']
})
export class RoleloginComponent implements OnInit {
  error: string;
  model: any = {};
  errorMessage = '';
  message = '';
  loading = false;
  selected = 'publish';
  albums;
  post: any;
  constructor(public location: Location, private rolesservice: RoleserviceService, public snackBar: MatSnackBar,
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

    this.rolesservice.login(model).subscribe(res => {
      this.post = res;
      // localStorage.setItem("token", res.token);
      console.log("login success");
      this.router.navigate(['/home']);

    },

      error => {
        this.error = error;
        this.loading = false;
        // this.router.navigate(['/login']);

      }

    );


  }

  // login(){
  //   this.authService.validate(this.userEmail, this.userPassword)
  //   .then((response) => {
  //     this.authService.setUserInfo({'user' : response['user']});
  //     this.router.navigate(['home']);

  //   })
  // }





}