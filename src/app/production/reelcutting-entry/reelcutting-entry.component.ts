import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ApiService } from 'src/app/service/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Itemmaster } from '../../inventory/itemmaster'
import { PurchaseserviceService } from '../../purchase/purchaseservice.service';
import { ProductionServiceService } from '../production-service.service';
// import { QRCodeModule } from 'angularx-qrcode';
@Component({
  selector: 'app-reelcutting-entry',
  templateUrl: './reelcutting-entry.component.html',
  styleUrls: ['./reelcutting-entry.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReelcuttingEntryComponent implements OnInit {
  selected = 'publish';
  albums: any = [];
  htmlContent = '';
  post: any;
  Unit: any = [];
  myAngularxQrCode: string = null;
  step = 0;
  dataSource: MatTableDataSource<Itemmaster>;
  displayedColumns: string[] = ['sr', 'itemName', 'manualCode', 'currentStock', 'unitName', 'reordQTY', 'reqQTY', 'costCenter', 'reqDate', 'remark'];
  random: string;
  possible: string;
  // randomInt = (min: number, max: number): number => {
  //   return Math.floor(Math.random() * (max - min + 1) + min);
  // };

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }



  singlejumborollinformation: any = [];
  ItemsName: any = [];

  _id: string;
  StudentData: any = [];
  jumboinformation: any = {};
  jumborollinformation: any = {};
  model: any = {};
  constructor(public location: Location, private productionservice: ProductionServiceService, private apiservice: ApiService, private purchaseservice: PurchaseserviceService, public snackBar: MatSnackBar,
    private router: Router, private route: ActivatedRoute, private _location: Location) {
    this._id = this.route.snapshot.paramMap.get('id');
    this.myAngularxQrCode = 'Your QR code data string';

    this.apiservice.getallitemmaster().subscribe(data => {
      this.StudentData = data;
      this.dataSource = new MatTableDataSource<Itemmaster>(this.StudentData);

    })

  }

  ngOnInit() {
    // this.Unit = 
    // this.albums = this.apiservice.getContacts();
    this.productionservice.getjumborollentry().subscribe(data => {
      this.Unit = data;

    })


    // this.apiservice.getalliteminformation().subscribe(data => {
    //   this.ItemsName = data;
    //   console.log(this.ItemsName)

    // })

  }
  makeid() {
    this.random = "";
    this.possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++) {
      this.random += this.possible.charAt(Math.floor(Math.random() * this.possible.length));
    }
    console.log(this.random)
  }


  back() {
    if (window.history.length > 2) {
      this._location.back();
    } else {
      this.router.navigate(['/']);
    }
  }




  onSubmit(model, f) {
    model.reelcuttingentryNumber = this.random;
    this.productionservice.addjumborollentry(model).subscribe(res => {
      this.post = res;
      console.log('add jumbo roll');
      console.log(this.post)
      f.resetForm();
      this.snackBar.open('saved', '', { duration: 3000 });
      // this.router.navigate(['/']);
    })



  }

  onAdd(value) {
    if (!this.model.Tickets) {
      this.model.Tickets = [];
    }
    Array.from({ length: value }, (_, i) => this.model.Tickets.push({}));
  }

  onRemove(value) {
    this.model.Tickets = [];
    Array.from({ length: value - 1 }, (_, i) => this.model.Tickets.push({}));
  }

  RandomNumber() {
    // Math.floor(Math.random() * (max - min + 1) + min);
    this.random = Math.floor((Math.random() * 10) + 1).toString();
  }



  singlejumbo(selectedalbumid: string) {
    console.log(selectedalbumid)
    this.productionservice.getsinglejumborollentry(selectedalbumid).subscribe(data => {
      this.singlejumborollinformation = data;
      this.ItemsName = this.singlejumborollinformation
      this.jumboinformation = this.ItemsName.jumbuinformation;
      this.jumborollinformation = this.ItemsName.jumborollentry;


      console.log(this.singlejumborollinformation)

    })

  }



}
