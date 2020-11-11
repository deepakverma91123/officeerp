import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ApiService } from 'src/app/service/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { Csvmodel } from '../csvmodel';
import { Product } from '../product'


@Component({
  selector: 'app-import-product',
  templateUrl: './import-product.component.html',
  styleUrls: ['./import-product.component.css']
})
export class ImportProductComponent implements OnInit {
  selected = 'publish';
  albums: any = [];
  htmlContent = '';
  post: any;

  public records: any[] = [];
  @ViewChild('csvReader') csvReader: any;
  selectedCar: number;

  cars = [
    { id: 1, name: 'Volvo' },
    { id: 2, name: 'Saab' },
    { id: 3, name: 'Opel' },
    { id: 4, name: 'Audi' },
  ];
  _id: string;
  model: any = {};
  headerLength: any
  csvArr: any;
  constructor(public location: Location, private apiservice: ApiService, public snackBar: MatSnackBar,
    private router: Router, private route: ActivatedRoute, private _location: Location) {
    this._id = this.route.snapshot.paramMap.get('id');

  }

  ngOnInit() {

    // this.albums = this.apiservice.getContacts();


    this.apiservice.getproductss(this._id)
      .subscribe(data => {

        console.log(data);
        this.albums = data;
        console.log(this.albums);
      });


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


  back() {
    if (window.history.length > 2) {
      this._location.back();
    } else {
      this.router.navigate(['/']);
    }
  }




  onSubmit(model, f, headerLength, csvRecord) {

    this.apiservice.createContact(csvRecord).subscribe((res) => {
      this.post = res;
      console.log("Created a customer");
      console.log(this.post);
    });

    f.resetForm();
    this.snackBar.open('saved', '', { duration: 3000 });
    this.router.navigate(['/landing']);

  }





}
