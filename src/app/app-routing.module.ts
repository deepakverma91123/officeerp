import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './component/landing/landing.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './form/login/login.component';
import { SignupComponent } from './form/signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductFormComponent } from './inventory/product-form/product-form.component';
import { ImportProductComponent } from './inventory/import-product/import-product.component';
import { ListProductComponent } from './inventory/list-product/list-product.component';
import { ProductEditComponent } from './inventory/product-edit/product-edit.component';
import { ListPurchaseComponent } from './purchase/list-purchase/list-purchase.component';
import { OrderComponent } from './purchase/order/order.component';
import { UnitMasterComponent } from './inventory/unit-master/unit-master.component';
import { IteminformationComponent } from './inventory/iteminformation/iteminformation.component';
import { ItemMasterComponent } from './inventory/item-master/item-master.component';
import { CategoryComponent } from './inventory/category/category.component';
import { IndentEntryComponent } from './purchase/indent-entry/indent-entry.component';
import { MrnEntryComponent } from './purchase/mrn-entry/mrn-entry.component';
import { ProductReportComponent } from './inventory/product-report/product-report.component';
import { PurchaseReturnComponent } from './purchase/purchase-return/purchase-return.component';
import { GateEntryComponent } from './gateentry/gate-entry/gate-entry.component';
import { JumborollEntryComponent } from './production/jumboroll-entry/jumboroll-entry.component';
import { BillEntryComponent } from './purchase/bill-entry/bill-entry.component';
import { WeighmenttwoComponent } from './gateentry/weighmenttwo/weighmenttwo.component';
import { RolesComponent } from './admin/roles/roles.component';
import { ReelcuttingEntryComponent } from './production/reelcutting-entry/reelcutting-entry.component';
import { IndententryReportComponent } from './purchase/indententry-report/indententry-report.component';
import { IndentLandingComponent } from './purchase/indent-landing/indent-landing.component';
import { ReelcuttingLandingComponent } from './production/reelcutting-landing/reelcutting-landing.component';
import { ReelcuttingReportComponent } from './production/reelcutting-report/reelcutting-report.component';
import { SupplierInformationComponent } from './inventory/supplier-information/supplier-information.component';
import { IndentprofileComponent } from './purchase/indentprofile/indentprofile.component';
import { ItemMasterReportComponent } from './inventory/item-master-report/item-master-report.component';
import { ItemMasterLandingComponent } from './inventory/item-master-landing/item-master-landing.component';
import { JumborollLandingComponent } from './production/jumboroll-landing/jumboroll-landing.component';
import { JumborollEntryReportComponent } from './production/jumboroll-entry-report/jumboroll-entry-report.component';
import { ConsumptionEntryComponent } from './consumption/consumption-entry/consumption-entry.component';
import { SalesOrderEntryComponent } from './sales/sales-order-entry/sales-order-entry.component';
import { SalesBillEntryComponent } from './sales/sales-bill-entry/sales-bill-entry.component';
import { SalesMrnEntryComponent } from './sales/sales-mrn-entry/sales-mrn-entry.component';
import { SalesGateEntryComponent } from './gateentry/sales-gate-entry/sales-gate-entry.component';
import { AddCustomerComponent } from './customer/add-customer/add-customer.component';
import { AddSupplierComponent } from './supplier/add-supplier/add-supplier.component';
import { LandingSupplierComponent } from './supplier/landing-supplier/landing-supplier.component';
import { ReportSupplierComponent } from './supplier/report-supplier/report-supplier.component';
import { LandingCustomerComponent } from './customer/landing-customer/landing-customer.component';
import { ReportCustomerComponent } from './customer/report-customer/report-customer.component';
import { LandingConsumptionComponent } from './consumption/landing-consumption/landing-consumption.component';
import { JumborollRegisterComponent } from './production/jumboroll-register/jumboroll-register.component';
import { ReelregisterComponent } from './production/reelregister/reelregister.component';
import { ItemmasterregisterComponent } from './inventory/itemmasterregister/itemmasterregister.component';
import { PurchaseregisterComponent } from './purchase/purchaseregister/purchaseregister.component';
import { JumbubrightnessComponent } from './production/jumbubrightness/jumbubrightness.component';
import { JumbuqualityComponent } from './production/jumbuquality/jumbuquality.component';
import { JumbugsmComponent } from './production/jumbugsm/jumbugsm.component';
import { AuthGuard } from './admin/auth.guard';


const routes: Routes = [

  // { path: '', pathMatch: 'full', redirectTo: 'landing' },

  // { path: '', component: HomeComponent },
  // canActivate: [AuthGuard]
  { path: '', component: LandingComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'dashboard', component: DashboardComponent, },
  { path: 'productform', component: ProductFormComponent },
  { path: 'getallproducts/:id', component: ProductFormComponent },
  { path: 'getallproducts/:id/edit', component: ProductEditComponent },




  { path: 'unitmaster', component: UnitMasterComponent },



  { path: 'importproduct', component: ImportProductComponent },

  { path: 'listproduct', component: ListProductComponent },
  { path: 'order', component: ListPurchaseComponent },
  { path: 'productreport', component: ProductReportComponent },




  { path: 'iteminformation', component: IteminformationComponent },
  { path: 'supplierinformation', component: SupplierInformationComponent },
  { path: 'consumptionentry', component: ConsumptionEntryComponent },
  { path: 'consumptionlanding', component: LandingConsumptionComponent },
  // itemmaster filter
  { path: 'itemmasterfilter', component: ItemmasterregisterComponent },

  { path: 'itemmaster', component: ItemMasterComponent },
  { path: 'itemmasterlanding', component: ItemMasterLandingComponent },
  { path: 'itemmasterlanding/:id', component: ItemMasterReportComponent },
  { path: 'itemmasterlanding/:id/edit', component: ItemMasterComponent },



  { path: 'itemcategory', component: CategoryComponent },
  { path: 'indententry', component: IndentEntryComponent },
  { path: 'indententlanding', component: IndentLandingComponent },

  { path: 'indententlanding/:id', component: IndententryReportComponent },
  // { path: 'indententryreport/:id/edit', component: IndentEntryComponent },

  // { path: 'indententlanding', component: IndentLandingComponent },
  { path: 'indentprofile', component: IndentprofileComponent },



  { path: 'purchasefilter', component: PurchaseregisterComponent },


  { path: 'purchaseorder', component: OrderComponent },
  { path: 'purchaseorder/:id', component: IndentEntryComponent },

  { path: 'mrnentry', component: MrnEntryComponent },
  { path: 'purchasereturn', component: PurchaseReturnComponent },

  { path: 'billentry', component: BillEntryComponent },

  //gate entry
  { path: 'gateentry', component: GateEntryComponent },
  { path: 'salesgateentry', component: SalesGateEntryComponent },

  { path: 'weighmenttwo', component: WeighmenttwoComponent },



  // production routes  jumbu brighness

  { path: 'jumbubrighness', component: JumbubrightnessComponent },
  { path: 'jumbugsm', component: JumbugsmComponent },
  { path: 'jumbuquality', component: JumbuqualityComponent },



  // production Routes

  { path: 'jumborollentry', component: JumborollEntryComponent },
  { path: 'jumborollentrylanding', component: JumborollLandingComponent },
  { path: 'jumborollentrylanding/:id', component: JumborollEntryReportComponent },


  // report jumbu
  { path: 'jumborollreport', component: JumborollRegisterComponent },

  // reel report
  { path: 'reelreport', component: ReelregisterComponent },


  { path: 'reelcutting', component: ReelcuttingEntryComponent },
  { path: 'reelcuttinglanding', component: ReelcuttingLandingComponent },
  { path: 'reelcuttinglanding/:id', component: ReelcuttingReportComponent },

  // { path: 'reelcutting/:id', component: ReelcuttingReportComponent },
  { path: 'reelcutting/:id/edit', component: ReelcuttingEntryComponent },




  /// Sales Routing

  { path: 'salesorderentry', component: SalesOrderEntryComponent },
  { path: 'salesbillentry', component: SalesBillEntryComponent },
  { path: 'salesmrnentry', component: SalesMrnEntryComponent },

  // customer Routing

  { path: 'addcustomer', component: AddCustomerComponent },
  { path: 'customerlanding', component: LandingCustomerComponent },
  { path: 'customerlanding/:id', component: ReportCustomerComponent },

  // supplier routing
  { path: 'addsupplier', component: AddSupplierComponent },
  { path: 'supplierlanding', component: LandingSupplierComponent },
  { path: 'supplierlanding/:id', component: ReportSupplierComponent },






  // admin
  { path: 'admin', component: RolesComponent },




  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
