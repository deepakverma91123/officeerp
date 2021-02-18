import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ApiService } from 'src/app/service/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { Observable } from 'rxjs';
import { Iteminformation } from '../../inventory/iteminformation'
import { validate } from 'json-schema';
import { Product } from '../product'

import { SupplierserviceService } from 'src/app/supplier/supplierservice.service';
@Component({
  selector: 'app-item-master',
  templateUrl: './item-master.component.html',
  styleUrls: ['./item-master.component.css']
})
export class ItemMasterComponent implements OnInit {
  selected = 'publish';
  albums: any = [];
  htmlContent = '';
  post: any;
  Unit: any = [];
  ItemsName: any = [];
  items: Observable<any>;
  CategoryName: any = [];
  manualcode: any
  selectedIndex: Number;
  categ: any = [];
  information: any = [];
  selectedCar: number;
  random: string;
  possible: string;
  cars = [
    { id: 1, name: 'Volvo' },
    { id: 2, name: 'Saab' },
    { id: 3, name: 'Opel' },
    { id: 4, name: 'Audi' },
  ];
  _id: string;
  states: {};
  cities: {};
  allunitmaster: any = []
  model: any = {};
  emp: Number
  selectedProduct: any = {};
  allSupplier: any = [];
  singleSupplier: any = {};
  headerLength: any
  csvArr: any;
  @Input() hero;
  str = 'this'
  ItemDate: Date;
  public records: any[] = [];
  randoms: string;
  constructor(public location: Location, private supplierservice: SupplierserviceService, private apiservice: ApiService, public snackBar: MatSnackBar,
    private router: Router, private route: ActivatedRoute, private _location: Location) {


  }

  ngOnInit() {
    this.ItemDate = new Date();

    // this.random = "R";
    // this.possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    // for (var i = 0; i < 5; i++) {
    //   this.random += this.possible.charAt(Math.floor(Math.random() * this.possible.length));
    // }
    // console.log('random' + this.random)
    this.makeid();
    console.log(this.makeid())
    // alert('hiii')

    // this.Unit = 
    // this.albums = this.apiservice.getContacts();
    this.apiservice.getallcategory().subscribe(data => {
      this.categ = data;

    })
    this.apiservice.getallunitmaster().subscribe(res => {

      this.allunitmaster = res
    })
    this.supplierservice.getallsupplier().subscribe(res => {
      this.allSupplier = res;

    })

    this.apiservice.getalliteminformation().subscribe(data => {
      this.information = data;

    })
    this.apiservice.getalliteminformation().subscribe(data => {
      this.ItemsName = data;
      this.manualcode = data['manualCode'];
      let maualcode = this.ItemsName.find(x => x.id == this.model.ItemsName).manualcode
      console.log(maualcode)
      //  countryId=StateList.find(x=>x.id==model.state).country_id
      console.log(this.ItemsName)
      console.log(this.manualcode);
      // this.manualcode = this.ItemsName.manualcode
      // for (let i = 1; i < this.ItemsName.length; i++) {
      //   this.manualcode = this.ItemsName.manualcode

      // }



    })






    this.apiservice.getsingleitemmaster(this._id)
      .subscribe(data => {

        console.log(data);
        this.model = data;
        console.log(this.model);
      });


  }
  // this.model.liveBirthsList = [];
  //   Array.from({ length: value }, (_, i) => this.model.liveBirthsList.push({}));
  itemChange(value) {




  }
  makeid() {
    this.random = "";
    this.randoms = "";
    this.possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++) {
      this.random += this.possible.charAt(Math.floor(Math.random() * this.possible.length));
    }

    for (var i = 0; i < 5; i++) {
      this.randoms += this.possible.charAt(Math.floor(Math.random() * this.possible.length));
    }
    // return this.random;
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
    if (model.itemDate) {
      this.model.itemDate = model.itemDate.toDate();
    }
    model.manualCode = this.randoms
    model.itemmasterId = this.random

    model.singleSupplier = this.singleSupplier;
    this.apiservice.additemmaster(model).subscribe((res) => {
      this.post = res;
      // let _id = res['_id'];

      console.log("Created a item master");
      console.log(this.post);
    });
    // f.resetForm();
    this.snackBar.open('saved', '', { duration: 3000 });
    // this.router.navigate(['/itemmasterlanding']);

  }

  // stateChange(event) {
  //   let selectedIndex: number = event.target["data-manualCode"];
  //   console.log(event.target.options[selectedIndex].getAttribute("data-manualCode"))
  // }

  stateChange(event) {
    // let selectedIndex: number = event.target["data-manualCode"];
    // console.log(event.target.options[selectedIndex].getAttribute("data-manualCode"))
  }


  // stateChang(event) {
  //   let selectedIndex = event.target["selectedIndex"];


  //   console.log(event.target.options[selectedIndex].getAttribute("data-manualcode"))
  // }
  // onChangeCountry(_id) {
  //   if (_id) {
  //     this.apiservice.getsingleiteminformation(_id).subscribe(
  //       data => {
  //         this.states = data;
  //         this.cities = null;
  //         console.log(this.states)
  //       }
  //     );
  //   } else {
  //     this.states = null;
  //     this.cities = null;
  //   }
  // }

  onSelect(productId) {


    for (let i = 0; i < this.ItemsName.length; i++) {
      if (this.ItemsName[i].manualCode == productId) {
        this.selectedProduct = this.ItemsName[i];
        console.log(this.selectedProduct)
      }
    }
  }


  supplier(supplierid) {
    this.supplierservice.getsinglesupplier(supplierid).subscribe(res => {
      this.singleSupplier = res;


    })
  }



  uploadListener($event: any): void {

    let text = [];
    let files = $event.srcElement.files;

    if (this.isValidCSVFile(files[0])) {

      let input = $event.target;
      let reader = new FileReader();
      reader.readAsText(input.files[0]);

      reader.onload = () => {
        let csvData = reader.result;
        let csvRecordsArray = (<string>csvData).split(/\r\n|\n/);

        let headersRow = this.getHeaderArray(csvRecordsArray);

        this.records = this.getDataRecordsArrayFromCSVFile(csvRecordsArray, headersRow.length);
      };

      reader.onerror = function () {
        console.log('error is occured while reading file!');
      };

    } else {
      alert("Please import valid .csv file.");
      // this.fileReset();
    }
  }



  getDataRecordsArrayFromCSVFile(csvRecordsArray: any, headerLength: any) {
    let csvArr = [];

    for (let i = 1; i < csvRecordsArray.length; i++) {
      let curruntRecord = (<string>csvRecordsArray[i]).split(',');
      if (curruntRecord.length == headerLength) {
        // let csvRecord: Csvmodel = new Csvmodel();
        let csvRecord: Product = new Product();


        csvRecord.productCode = curruntRecord[0].trim();
        csvRecord.productName = curruntRecord[1].trim();
        csvRecord.productTax = curruntRecord[2].trim();
        csvRecord.productType = curruntRecord[3].trim();
        csvRecord.productDescription = curruntRecord[4].trim();
        csvArr.push(csvRecord);
        this.apiservice.createContact(csvRecord).subscribe((res) => {
          this.post = res;
          console.log("Created a customer");
        });







      }
    }

    console.log(csvArr)

    return csvArr;
  }


  isValidCSVFile(file: any) {
    return file.name.endsWith(".csv");
  }

  getHeaderArray(csvRecordsArr: any) {
    let headers = (<string>csvRecordsArr[0]).split(',');
    let headerArray = [];
    for (let j = 0; j < headers.length; j++) {
      headerArray.push(headers[j]);
    }
    return headerArray;
  }




}
