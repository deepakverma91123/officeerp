import { Component, OnInit, OnDestroy, Input, OnChanges } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ApiService } from 'src/app/service/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';






declare var require: any;
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit, OnChanges {
  @Input() inputSnav: MatSidenav;
  adminNav: boolean;
  purchaseNav: boolean;
  uid: string;
  _id: string;
  loading = true;
  constructor(private apiservice: ApiService, public snackBar: MatSnackBar,
    private router: Router, private route: ActivatedRoute) {

  }

  ngOnChanges() {
  }
  ngOnInit() {

    this.apiservice.getuser(this._id).subscribe((data: any) => {
      if (data) {
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