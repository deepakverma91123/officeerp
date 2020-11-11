import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  location: Observable<any>;
  @Input() title: String;
  search = false;
  q = '';
  @ViewChild(MatSidenav, { static: false }) sidenav: MatSidenav;


  constructor(public router: Router, private route: ActivatedRoute, private _location: Location) {

  }

  ngOnInit() {
    this.q = this.route.snapshot.queryParamMap.get('q') || '';

    this.router.events.subscribe(event => {
      if (this.sidenav) {
        this.sidenav.close();
      }
    });

  }


  back() {
    if (window.history.length > 2) {
      this._location.back();
    } else {
      this.router.navigate(['/']);
    }
  }


  onSubmit(q, f) {
    this.router.navigate(['/search'], { queryParams: { q: q } });
  }

  onClose(f) {
    f.resetForm();
    this.search = false;
  }
  onFocusOut(q, f) {
    if (!q) {
      f.resetForm();
      this.search = false;
    }
  }


}
