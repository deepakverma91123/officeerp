import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
@Component({
  selector: 'app-product-report',
  templateUrl: './product-report.component.html',
  styleUrls: ['./product-report.component.css']
})
export class ProductReportComponent implements OnInit {
  selected = 'publish';
  item: Observable<any>;
  // albums:Observable<any[]>;
  albums: any = [];
  pes: any = [];
  book: any = {};
  _id: string;
  model: any = {};
  constructor(public location: Location, private apiservice: ApiService,
    private router: Router, private route: ActivatedRoute, private _location: Location) {
    this._id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {

    // this.albums = this.apiservice.getContacts();
    this.item = this.apiservice.getproductss(this._id);

    this.apiservice.getproductss(this._id)
      .subscribe(data => {

        console.log(data);
        this.albums = data;
        console.log(this.albums);
      });

  }


  deleteProduct(_id) {
    this.apiservice.deleteProducts(this._id).subscribe(res => {

      this.pes = res;
      this.router.navigate(['/landing']);
      console.log(this.pes)

    }, (err) => {
      console.log(err);
    }

    );


  }



  // updateProduct(_id, model){
  //   this.apiservice.updateProducts(this._id, this.model).subscribe(res=>{
  //     this.pes = res;
  //     this.router.navigate(['/']);
  //     console.log(this.pes)
  //   },(err) => {
  //     console.log(err);
  //   })

  // }




  back() {
    if (window.history.length > 2) {
      this._location.back();
    } else {
      this.router.navigate(['/']);
    }
  }


}