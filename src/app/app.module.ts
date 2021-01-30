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
import { QRCodeModule } from 'angularx-qrcode';
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
import { Ng2SearchPipeModule } from 'ng2-search-filter';
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
import { ReelcuttingEntryComponent } from './production/reelcutting-entry/reelcutting-entry.component';
import { BundleEntryComponent } from './production/bundle-entry/bundle-entry.component';
import { OrderReportComponent } from './purchase/order-report/order-report.component';
import { IndententryReportComponent } from './purchase/indententry-report/indententry-report.component';
import { ProductionServiceService } from './production/production-service.service';
import { GatentryServiceService } from './gateentry/gatentry-service.service';
import { BillEntryComponent } from './purchase/bill-entry/bill-entry.component';
import { SumPipe } from './pipe/sum.pipe';
import { WeighmenttwoComponent } from './gateentry/weighmenttwo/weighmenttwo.component';
import { RolesComponent } from './admin/roles/roles.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { MatChipsModule } from '@angular/material/chips';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { IndentLandingComponent } from './purchase/indent-landing/indent-landing.component';
import { ReelcuttingReportComponent } from './production/reelcutting-report/reelcutting-report.component';
import { ReelcuttingLandingComponent } from './production/reelcutting-landing/reelcutting-landing.component';
import { SupplierInformationComponent } from './inventory/supplier-information/supplier-information.component';
import { IndentprofileComponent } from './purchase/indentprofile/indentprofile.component';
import { ItemMasterReportComponent } from './inventory/item-master-report/item-master-report.component';
import { ItemMasterLandingComponent } from './inventory/item-master-landing/item-master-landing.component';
import { JumborollEntryReportComponent } from './production/jumboroll-entry-report/jumboroll-entry-report.component';
import { JumborollLandingComponent } from './production/jumboroll-landing/jumboroll-landing.component';
import { ConsumptionserviceService } from './consumption/consumptionservice.service';
import { ConsumptionEntryComponent } from './consumption/consumption-entry/consumption-entry.component';
import { SalesOrderEntryComponent } from './sales/sales-order-entry/sales-order-entry.component';
import { SalesBillEntryComponent } from './sales/sales-bill-entry/sales-bill-entry.component';
import { SalesMrnEntryComponent } from './sales/sales-mrn-entry/sales-mrn-entry.component';
import { SalesGateEntryComponent } from './gateentry/sales-gate-entry/sales-gate-entry.component';
import { AddSupplierComponent } from './supplier/add-supplier/add-supplier.component';
import { LandingSupplierComponent } from './supplier/landing-supplier/landing-supplier.component';
import { ReportSupplierComponent } from './supplier/report-supplier/report-supplier.component';
import { ReportCustomerComponent } from './customer/report-customer/report-customer.component';
import { AddCustomerComponent } from './customer/add-customer/add-customer.component';
import { LandingCustomerComponent } from './customer/landing-customer/landing-customer.component';
import { CustomerserviceService } from './customer/customerservice.service';
import { SupplierserviceService } from './supplier/supplierservice.service';
import { UploadImageComponent } from './gateentry/upload-image/upload-image.component';
import { LandingConsumptionComponent } from './consumption/landing-consumption/landing-consumption.component';
import { AlluserComponent } from './admin/alluser/alluser.component';
import { UserreportComponent } from './admin/userreport/userreport.component';
import { ReelregisterComponent } from './production/reelregister/reelregister.component';
import { ItemmasterregisterComponent } from './inventory/itemmasterregister/itemmasterregister.component';
import { PurchaseregisterComponent } from './purchase/purchaseregister/purchaseregister.component';
import { JumbubrightnessComponent } from './production/jumbubrightness/jumbubrightness.component';
import { JumbuqualityComponent } from './production/jumbuquality/jumbuquality.component';
import { JumbugsmComponent } from './production/jumbugsm/jumbugsm.component';
import { RoleloginComponent } from './admin/rolelogin/rolelogin.component';
import { RoleserviceService } from './admin/roleservice.service';
import { NgxChartsModule } from '@swimlane/ngx-charts';



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
    ReelcuttingEntryComponent,
    BundleEntryComponent,
    OrderReportComponent,
    IndententryReportComponent,
    BillEntryComponent,
    SumPipe,
    WeighmenttwoComponent,
    RolesComponent,
    IndentLandingComponent,
    ReelcuttingReportComponent,
    ReelcuttingLandingComponent,
    SupplierInformationComponent,
    IndentprofileComponent,
    ItemMasterReportComponent,
    ItemMasterLandingComponent,
    JumborollEntryReportComponent,
    JumborollLandingComponent,
    ConsumptionEntryComponent,
    SalesOrderEntryComponent,
    SalesBillEntryComponent,
    SalesMrnEntryComponent,
    SalesGateEntryComponent,
    AddSupplierComponent,
    LandingSupplierComponent,
    ReportSupplierComponent,
    ReportCustomerComponent,
    AddCustomerComponent,
    LandingCustomerComponent,
    UploadImageComponent,
    LandingConsumptionComponent,
    AlluserComponent,
    UserreportComponent,
    ReelregisterComponent,
    ItemmasterregisterComponent,
    PurchaseregisterComponent,
    JumbubrightnessComponent,
    JumbuqualityComponent,
    JumbugsmComponent,
    RoleloginComponent
  ],
  imports: [
    BrowserModule, AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule, ScrollingModule, QRCodeModule, NgxQRCodeModule, MatExpansionModule, MatTableModule, HttpClientModule, FormsModule, ReactiveFormsModule, MatIconModule, FlexLayoutModule, MatMenuModule, MatSidenavModule, MatToolbarModule, MatCardModule, MatDividerModule, MatGridListModule,
    AppRoutingModule, Ng2SearchPipeModule, MatFormFieldModule, MatInputModule, MatRadioModule, MatSelectModule, MatSliderModule, MatListModule,
    BrowserAnimationsModule, NgxChartsModule, MatChipsModule, NgSelectModule, AngularEditorModule, MatPaginatorModule, MatSnackBarModule, MatAutocompleteModule, MatCheckboxModule, MatDatepickerModule, MatStepperModule, MatButtonModule, MatRippleModule,
  ],
  providers: [ApiService, RoleserviceService, ConsumptionserviceService, CustomerserviceService, SupplierserviceService, PurchaseserviceService, ProductionServiceService, GatentryServiceService,
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },


  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
