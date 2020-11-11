import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { Location } from '@angular/common';
// import { Product } from '../../inventory/product'
import { Product } from '../product'
import { ViewChild, } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { from } from 'rxjs';
import { MatSort } from '@angular/material/sort';
// import * as jsPDF from 'jspdf'
// import jsPDF from 'jspdf';
declare var jsPDF: any;
@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements AfterViewInit, OnInit {
  elementType = 'url';
  value = 'Techiediaries';
  @ViewChild('htmlData') htmlData:ElementRef;
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  StudentData: any = [];
  dataSource: MatTableDataSource<Product>;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  displayedColumns: string[] = ['_id', 'productName', 'productCode', 'secondaryName', 'category', 'productCost', 'action'];



  constructor(private apiservice: ApiService, public snackBar: MatSnackBar,
    private router: Router, private route: ActivatedRoute, private _location: Location) {

    this.apiservice.getContacts().subscribe(data => {
      this.StudentData = data;
      this.dataSource = new MatTableDataSource<Product>(this.StudentData);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      }, 0);
    })

  }

  ngOnInit(): void {
  }

  back() {
    if (window.history.length > 2) {
      this._location.back();
    } else {
      this.router.navigate(['/']);
    }
  }

  deleteProduct(index: number, e) {
    if (window.confirm('Are you sure')) {
      const data = this.dataSource.data;
      data.splice((this.paginator.pageIndex * this.paginator.pageSize) + index, 1);
      this.dataSource.data = data;
      this.apiservice.deleteProducts(e._id).subscribe()
    }
  }


  public openPDF(): void {
    let DATA = this.htmlData.nativeElement;
    let doc = new jsPDF('p', 'pt', 'a4');
    doc.fromHTML(DATA.innerHTML, 15, 15);
    doc.output('dataurlnewwindow');
  }

  public downloadPDF(): void {
    let DATA = this.htmlData.nativeElement;
    let doc = new jsPDF('p', 'pt', 'a4');

    let handleElement = {
      '#editor': function (element, renderer) {
        return true;
      }
    };
    doc.fromHTML(DATA.innerHTML, 15, 15, {
      'width': 1000,
      'elementHandlers': handleElement
    });

    doc.save('product.pdf');
  }
  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }



}
