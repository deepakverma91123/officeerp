import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
// import { ApiService } from 'src/app/service/api.service';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit, OnDestroy {
  id: string;
  item: Observable<any[]>;
  items: any = [];
  title: string;
  offset: number;
  search = false;
  @ViewChild(MatSidenav, { static: true }) sidenav: MatSidenav;
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  online: Observable<boolean>;
  uid: string;
  lastVisible;
  query: any;
  loading: boolean;
  limit = 30;
  subscription: Subscription;
  editRoles: any = [];
  breakpoint: number;
  model: any = {};
  albums: any;
  book = {};




  constructor(
    changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,

    private route: ActivatedRoute, private _location: Location,
    private router: Router, public dialog: MatDialog
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();

    // this.getBookDetails(this.route.snapshot.params['_id']);
  }






  backClicked() {
    this.router.navigate(['/']);
  }

  historyClicked() {
    if (window.history.length > 2) {
      this._location.back();
    } else {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {

    // this.albums = this.apiservice.getContacts();
    // this.apiservice.getproductss(this.id)
    //   .subscribe(data => {
    //     console.log(data);
    //     this.book = data;
    //   });




    let i = 3;
    if (window.innerWidth < 600) {
      i = 2;
    } else if (window.innerWidth < 1200) {
      i = 4;
    } else {
      i = 6;
    }

    this.breakpoint = i;
    this.items = [];

    this.router.events.subscribe(event => {
      if (this.sidenav) {
        this.sidenav.close();
      }
    });
  }



  // getBookDetails(id) {
  //   this.apiservice.getproductss(id)
  //     .subscribe(data => {
  //       console.log(data);
  //       this.book = data;
  //     });
  // }



  onResize(event) {
    let i = 3;
    if (event.target.innerWidth < 600) {
      i = 2;
    } else if (event.target.innerWidth < 1200) {
      i = 4;
    } else {
      i = 6;
    }
    this.breakpoint = i;
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}