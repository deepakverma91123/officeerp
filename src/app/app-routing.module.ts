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


const routes: Routes = [

  // { path: '', pathMatch: 'full', redirectTo: 'landing' },

  // { path: '', component: HomeComponent },
  { path: '', component: LandingComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'productform', component: ProductFormComponent },
  { path: 'getallproducts/:id', component: ProductFormComponent },
  { path: 'getallproducts/:id/edit', component: ProductEditComponent },




  { path: 'unitmaster', component: UnitMasterComponent },



  { path: 'importproduct', component: ImportProductComponent },

  { path: 'listproduct', component: ListProductComponent },
  { path: 'order', component: ListPurchaseComponent },
  { path: 'productreport', component: ProductReportComponent },




  { path: 'iteminformation', component: IteminformationComponent },
  { path: 'itemmaster', component: ItemMasterComponent },
  { path: 'itemcategory', component: CategoryComponent },
  { path: 'indententry', component: IndentEntryComponent },
  { path: 'purchaseorder', component: OrderComponent },
  { path: 'mrnentry', component: MrnEntryComponent },








  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
