import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ApiService } from 'src/app/service/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Itemmaster } from '../../inventory/itemmaster'
import { PurchaseserviceService } from '../purchaseservice.service';
import { $ } from 'protractor';
@Component({
  selector: 'app-indent-entry',
  templateUrl: './indent-entry.component.html',
  styleUrls: ['./indent-entry.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IndentEntryComponent implements OnInit {
  selected = 'publish';
  albums: any = [];
  htmlContent = '';
  post: any;
  Unit: any = [];
  step = 0;
  dataSource: MatTableDataSource<Itemmaster>;
  displayedColumns: string[] = ['sr', 'itemName', 'manualCode', 'currentStock', 'unitName', 'reordQTY', 'reqQTY', 'costCenter', 'reqDate', 'remark'];
  random = '?';
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



  singleiteminformation: any = [];
  ItemsName: any = [];
  selectedCar: number;
  value = 1;
  cars = [
    { id: 1, name: 'Volvo' },
    { id: 2, name: 'Saab' },
    { id: 3, name: 'Opel' },
    { id: 4, name: 'Audi' },
  ];
  _id: string;
  StudentData: any = [];
  model: any = {};
  constructor(public location: Location, private apiservice: ApiService, private purchaseservice: PurchaseserviceService, public snackBar: MatSnackBar,
    private router: Router, private route: ActivatedRoute, private _location: Location) {
    this._id = this.route.snapshot.paramMap.get('id');

    this.apiservice.getallitemmaster().subscribe(data => {
      this.StudentData = data;
      this.dataSource = new MatTableDataSource<Itemmaster>(this.StudentData);

    })

  }

  ngOnInit() {
    // this.Unit = 
    // this.albums = this.apiservice.getContacts();
    this.apiservice.getallunitmaster().subscribe(data => {
      this.Unit = data;

    })


    this.apiservice.getalliteminformation().subscribe(data => {
      this.ItemsName = data;
      console.log(this.ItemsName)

    })


    this.apiservice.getproductss(this._id)
      .subscribe(data => {

        console.log(data);
        this.albums = data;
        console.log(this.albums);
      });


  }

  back() {
    if (window.history.length > 2) {
      this._location.back();
    } else {
      this.router.navigate(['/']);
    }
  }




  onSubmit(model, f) {


    this.purchaseservice.addindententry(model).subscribe((res) => {
      this.post = res;
      // let _id = res['_id'];

      console.log("add indent entry");
    });
    f.resetForm();
    this.snackBar.open('saved', '', { duration: 3000 });
    this.router.navigate(['/purchaseorder']);

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



  onalbum(selectedalbumid: string) {
    console.log(selectedalbumid)
    // this.ngModelChange.emit(selectedalbumid);
    this.apiservice.getsingleiteminformation(selectedalbumid).subscribe(data => {
      // setTimeout(() => {
      //   this.singleindententrydetails = data;

      // }, 2000);

      this.singleiteminformation = data;


      // this.singleiteminformation.itemName


    })

  }



}
