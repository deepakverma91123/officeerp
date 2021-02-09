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
  randoms: string;
  possible: string;
  updateId: string;
  roll: any = {};
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
  reelsize: string;
  inputValue: any[];
  secondaryTable = [];
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
  make() {
    this.randoms = "";
    this.possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++) {
      this.randoms += this.possible.charAt(Math.floor(Math.random() * this.possible.length));
    }
    console.log(this.random)
  }


  onAddRell(value) {
    if (!this.model.Tickets) {
      this.model.Tickets = [];
      // this.makeid();
    }

    if (this.model.Tickets) {
      this.model.Tickets = [];
      this.makeid();
    }
    // this.makeid();
    Array.from({ length: value }, (_, i) => this.model.Tickets.push({}), this.makeid());


    // let obj = this.model.Tickets.indexOf(m => m.value == value);

    // this.model.Tickets = obj



    // this.model.Tickets.indexOf(value);
    // if (value) {
    //   this.model.Tickets.splice(value);
    // }
    // else {
    //   this.model.Tickets.push(value);
    // }

    console.log("the selected value is " + value);
  }


  back() {
    if (window.history.length > 2) {
      this._location.back();
    } else {
      this.router.navigate(['/']);
    }
  }


  onsize(e, index) {
    // console.log(e);
    // this.reelsize = e;
    console.log(e)
    this.inputValue[index] = e;
    // rest of the code
    console.log(this.inputValue);


  }

  onSubmit(model, f) {
    model.updateId = this.updateId;
    model.ItemsName = this.ItemsName;

    model.reelItemName = this.ItemsName.jumbuGsm + 'GSM' + this.ItemsName.jumbuQuality + 'BF' + this.reelsize;
    console.log('reelitem name' + model.reelItemName);


    /// reel item ame
    // for (let i = 0; i < this.inputValue.length; i++) {

    //   this.model.Tickets[i]['totalAmounts'] = this.inputValue[i]

    // }



    model.jumbuGsm = this.ItemsName.jumbuGsm
    model.jumbuBrightness = this.ItemsName.jumbuBrightness
    model.jumbuQuality = this.ItemsName.jumbuQuality
    console.log(model.jumbuGsm);
    console.log(model.jumbuQuality);

    console.log(model.jumbuBrightness);

    model.reelcuttingentryNumber = model.Tickets.reelNumber;


    for (let index = 0; index < model.Tickets.length; index++) {
      // model.reelSize = model.Tickets.reelSize[index];
      // model.reelUnit = model.Tickets.reelUnit[index];
      // model.reelWeight = model.Tickets.reelWeight[index];
      model.reelItemName = model.Tickets[index].reelItemName;
      // model.reelItemName

      model.reelItemName = this.ItemsName.jumbuGsm + 'GSM' + this.ItemsName.jumbuQuality + 'BF' + model.Tickets[index].reelSize + 'Size';

      console.log('reel item name reel ' + model.reelItemName);
      model.reelSize = model.Tickets[index].reelSize;
      model.reelUnit = model.Tickets[index].reelUnit;
      model.reelGsm = model.Tickets[index].reelGsm;
      model.reelWeight = model.Tickets[index].reelWeight;

      model.reelRemark = model.Tickets[index].reelRemark;


      this.productionservice.addreelcuttingentry(model).subscribe(res => {
        this.post = res;
        //console.log('add reelcutting');
        // console.log(this.post)
        // f.resetForm();
        this.snackBar.open('saved', '', { duration: 3000 });
        // this.router.navigate(['/']);
      })

      this.productionservice.editjumborollentry(model.updateId, model.ItemsName).subscribe(res => {
        console.log(res);

        model.ItemsName.finalSubmit = 1;
        console.log(model.ItemsName.finalSubmit);
      })




    }




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
    this.updateId = selectedalbumid
    console.log(selectedalbumid)
    this.productionservice.getsinglejumborollentry(selectedalbumid).subscribe(data => {
      // const roll = JSON.stringify(data);
      // this.ItemsName = JSON.parse(roll)

      this.roll = data
      this.ItemsName = this.roll;

      // this.ItemsName = this.singlejumborollinformation
      // this.jumboinformation = this.ItemsName.jumbuinformation;
      // this.jumborollinformation = this.ItemsName.jumborollentry;

      console.log(this.ItemsName)

    })


  }



}
