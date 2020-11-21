import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { DateAdapter, MatRippleModule, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FlexLayoutModule } from "@angular/flex-layout";
import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { LandingComponent } from './component/landing/landing.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { ApiService } from './service/api.service';
import { HomeComponent } from './component/home/home.component';
import { TopComponent } from './layout/top/top.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LoginComponent } from './form/login/login.component';
import { SignupComponent } from './form/signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductFormComponent } from './inventory/product-form/product-form.component';
import { ListProductComponent } from './inventory/list-product/list-product.component';
import { ImportProductComponent } from './inventory/import-product/import-product.component';
import { ProductEditComponent } from './inventory/product-edit/product-edit.component';
import { ProductReportComponent } from './inventory/product-report/product-report.component';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { NgSelectModule } from '@ng-select/ng-select';
import { ListPurchaseComponent } from './purchase/list-purchase/list-purchase.component';
import { OrderComponent } from './purchase/order/order.component';
import { UnitMasterComponent } from './inventory/unit-master/unit-master.component';
import { CategoryComponent } from './inventory/category/category.component';
import { IteminformationComponent } from './inventory/iteminformation/iteminformation.component';
import { ItemMasterComponent } from './inventory/item-master/item-master.component';
import { IndentEntryComponent } from './purchase/indent-entry/indent-entry.component';
import { MrnEntryComponent } from './purchase/mrn-entry/mrn-entry.component';
import { PurchaseserviceService } from './purchase/purchaseservice.service';
import { PurchaseReturnComponent } from './purchase/purchase-return/purchase-return.component';
import { GateEntryComponent } from './gateentry/gate-entry/gate-entry.component';
import { JumborollEntryComponent } from './production/jumboroll-entry/jumboroll-entry.component';
import { JumborollRegisterComponent } from './production/jumboroll-register/jumboroll-register.component';
import { PendingJumborollRegisterComponent } from './production/pending-jumboroll-register/pending-jumboroll-register.component';
import { ReelcuttingEntryComponent } from './production/reelcutting-entry/reelcutting-entry.component';
import { ReelweightEntryComponent } from './production/reelweight-entry/reelweight-entry.component';
import { PackingweightEntryComponent } from './production/packingweight-entry/packingweight-entry.component';
import { SheetcuttingEntryComponent } from './production/sheetcutting-entry/sheetcutting-entry.component';
import { SheetRegisterComponent } from './production/sheet-register/sheet-register.component';
import { ReemEntryComponent } from './production/reem-entry/reem-entry.component';
import { ReemRegisterComponent } from './production/reem-register/reem-register.component';
import { PaleteweightEntryComponent } from './production/paleteweight-entry/paleteweight-entry.component';
import { PendingSheetRegisterComponent } from './production/pending-sheet-register/pending-sheet-register.component';
import { BundleEntryComponent } from './production/bundle-entry/bundle-entry.component';
import { OrderReportComponent } from './purchase/order-report/order-report.component';
import { IndententryReportComponent } from './purchase/indententry-report/indententry-report.component';


export const MY_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};








@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidenavComponent,
    LandingComponent,
    NavbarComponent,
    HomeComponent,
    TopComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    ProductFormComponent,
    ListProductComponent,
    ImportProductComponent,
    ProductEditComponent,
    ProductReportComponent,
    ListPurchaseComponent,
    OrderComponent,
    UnitMasterComponent,
    CategoryComponent,
    IteminformationComponent,
    ItemMasterComponent,
    IndentEntryComponent,
    MrnEntryComponent,
    PurchaseReturnComponent,
    GateEntryComponent,
    JumborollEntryComponent,
    JumborollRegisterComponent,
    PendingJumborollRegisterComponent,
    ReelcuttingEntryComponent,
    ReelweightEntryComponent,
    PackingweightEntryComponent,
    SheetcuttingEntryComponent,
    SheetRegisterComponent,
    ReemEntryComponent,
    ReemRegisterComponent,
    PaleteweightEntryComponent,
    PendingSheetRegisterComponent,
    BundleEntryComponent,
    OrderReportComponent,
    IndententryReportComponent
  ],
  imports: [
    BrowserModule, ScrollingModule, NgxQRCodeModule, MatExpansionModule, MatTableModule, HttpClientModule, FormsModule, ReactiveFormsModule, MatIconModule, FlexLayoutModule, MatMenuModule, MatSidenavModule, MatToolbarModule, MatCardModule, MatDividerModule, MatGridListModule,
    AppRoutingModule, MatFormFieldModule, MatInputModule, MatRadioModule, MatSelectModule, MatSliderModule, MatListModule,
    BrowserAnimationsModule, NgSelectModule, AngularEditorModule, MatPaginatorModule, MatSnackBarModule, MatAutocompleteModule, MatCheckboxModule, MatDatepickerModule, MatStepperModule, MatButtonModule, MatRippleModule,
  ],
  providers: [ApiService, PurchaseserviceService,
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },


  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
