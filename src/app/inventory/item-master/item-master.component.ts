import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ApiService } from 'src/app/service/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { Observable } from 'rxjs';
import { Iteminformation } from '../../inventory/iteminformation'
import { validate } from 'json-schema';
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

  selectedCar: number;

  cars = [
    { id: 1, name: 'Volvo' },
    { id: 2, name: 'Saab' },
    { id: 3, name: 'Opel' },
    { id: 4, name: 'Audi' },
  ];
  _id: string;
  states: {};
  cities: {};
  model: any = {};
  emp: Number
  selectedProduct: any = {};
  constructor(public location: Location, private apiservice: ApiService, public snackBar: MatSnackBar,
    private router: Router, private route: ActivatedRoute, private _location: Location) {
    this._id = this.route.snapshot.paramMap.get('id');




 

  }

  ngOnInit() {
    // this.Unit = 
    // this.albums = this.apiservice.getContacts();
    this.apiservice.getallunitmaster().subscribe(data => {
      this.Unit = data;

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



    // this.apiservice.getalliteminformation(_id).subscribe(data => {
    //   this.items = data;
    //   this.manualcode = this.ItemsName.manualcode


    // })

    this.apiservice.getallcategory().subscribe(data => {
      this.CategoryName = data;

    })


    this.apiservice.getproductss(this._id)
      .subscribe(data => {

        console.log(data);
        this.albums = data;
        console.log(this.albums);
      });


  }
  // this.model.liveBirthsList = [];
  //   Array.from({ length: value }, (_, i) => this.model.liveBirthsList.push({}));
  itemChange(value) {




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
    if (model.startDate) {
      this.model.startDate = model.startDate.toDate();
    }

    this.apiservice.additemmaster(model).subscribe((res) => {
      this.post = res;
      // let _id = res['_id'];

      console.log("Created a item master");
    });
    f.resetForm();
    this.snackBar.open('saved', '', { duration: 3000 });
    this.router.navigate(['/']);

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




}
