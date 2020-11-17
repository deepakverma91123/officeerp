import { Component, OnInit, OnDestroy, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ApiService } from 'src/app/service/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { PurchaseserviceService } from '../purchaseservice.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-purchase-return',
  templateUrl: './purchase-return.component.html',
  styleUrls: ['./purchase-return.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PurchaseReturnComponent implements OnInit {
  selected = 'publish';
  albums: any = [];
  htmlContent = '';
  post: any;
  Unit: any = [];
  today = new Date();
  selectedCar: number;

  cars = [
    { id: 1, name: 'Volvo' },
    { id: 2, name: 'Saab' },
    { id: 3, name: 'Opel' },
    { id: 4, name: 'Audi' },
  ];
  _id: string;
  model: any = {};
  constructor(public location: Location, private httpClient: HttpClient, private apiservice: ApiService, private purchaseservice: PurchaseserviceService, public snackBar: MatSnackBar,
    private router: Router, private route: ActivatedRoute, private _location: Location) {
    this._id = this.route.snapshot.paramMap.get('id');

  }

  ngOnInit() {
    // this.Unit = 
    // this.albums = this.apiservice.getContacts();
    this.purchaseservice.getallpurchaseorder().subscribe(data => {
      this.Unit = data;

    })



  }

  back() {
    if (window.history.length > 2) {
      this._location.back();
    } else {
      this.router.navigate(['/']);
    }
  }


  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      ['bold']
    ],
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  };

  onSubmit(model, f) {

    this.purchaseservice.addpurchasereturn(model).subscribe((res) => {
      this.post = res;
      // let _id = res['_id'];

      console.log("Created a mrn");
    });
    f.resetForm();
    this.snackBar.open('saved', '', { duration: 3000 });
    this.router.navigate(['/landing']);

  }



}
