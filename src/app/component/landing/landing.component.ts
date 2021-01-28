import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/service/api.service';
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


  allitem: any = [];

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
  mainData: any = [];
  saleData: any = [];

  // saleData = [
  //   { name: "Mobiles", value: 105000 },
  //   { name: "Laptop", value: 55000 },
  //   { name: "AC", value: 15000 },
  //   { name: "Headset", value: 150000 },
  //   { name: "Fridge", value: 20000 }
  // ];
  constructor(
    changeDetectorRef: ChangeDetectorRef, private apiservice: ApiService, media: MediaMatcher,

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


    this.apiservice.getallitemmastercount().subscribe(data => {
      this.allitem = data;
      console.log(this.allitem);
      this.saleData = [
        { name: "Mobiles", value: this.allitem },

      ];
      // let Store = [];
      // Store.push(this.allitem.data);
      // // let num = [7, 8, 9];
      // Store.forEach(res => {
      //   console.log(res);
      //   // this.mainData = res;
      // });


      // // this.allitem.push({ name: "name", value: "23" });


      // console.log(this.allitem)


      // console.log('this.allindent)
    })

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