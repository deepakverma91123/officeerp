import { Component, OnInit, OnDestroy, Input, OnChanges } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ApiService } from 'src/app/service/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RoleserviceService } from 'src/app/admin/roleservice.service';
import { Roles } from '../../admin/roles'


declare var require: any;
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit, OnChanges {
  @Input() inputSnav: MatSidenav;
  adminNav: boolean;
  salesNav: boolean;
  customerNav: boolean;
  supplierNav: boolean;
  consumptionNav: boolean;
  rolesNav: boolean;
  purchaseNav: boolean;
  gateentryNav: boolean;
  productionNav: boolean;
  uid: string;
  _id: string;
  loading = true;
  constructor(private apiservice: ApiService, private rolesservice: RoleserviceService, public snackBar: MatSnackBar,
    private router: Router, private route: ActivatedRoute) {

    // this.rolesservice.login(Rol).subscribe(x => this.user = x);
  }

  ngOnChanges() {
  }
  ngOnInit() {

    // this.apiservice.getuser(this._id).subscribe((data: any) => {
    //   if (data) {
    //     this.uid = data._id;
    //     this.loading = false;
    //     console.log(data)
    //   }
    //   else {
    //     this.loading = true;
    //     return 0;
    //   }

    // })

    this.rolesservice.getsingleroles(this._id).subscribe((data: any) => {
      if (data) {
        // this.uid = data._id;
        this.uid = data._id;

        this.loading = false;
        console.log(data)
      }
      else {
        this.loading = true;
        return 0;
      }



    })





  }

}