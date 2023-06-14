import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MerchandiseListComponent } from './merchandise/merchandise-list/merchandise-list.component';
import { MerchandiseFormComponent } from './merchandise/merchandise-form/merchandise-form.component';
import { StockListComponent } from './stock/stock-list/stock-list.component';
import { StockFormComponent } from './stock/stock-form/stock-form.component';
import { PriceListComponent } from './price/price-list/price-list.component';
import { PriceFormComponent } from './price/price-form/price-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  //#region Merchandise
  {
    path: 'merchandise/list',
    component: MerchandiseListComponent,
  },
  {
    path: 'merchandise/new',
    component: MerchandiseFormComponent,
  },
  {
    path: 'merchandise/:id/edit',
    component: MerchandiseFormComponent,
  },
  //#endregion
  //#region Stock
  {
    path: 'stock/list',
    component: StockListComponent,
  },
  {
    path: 'stock/new',
    component: StockFormComponent,
  },
  {
    path: 'stock/:id/edit',
    component: StockFormComponent,
  },
  //#endregion
  //#region Price
  {
    path: 'price/list',
    component: PriceListComponent,
  },
  {
    path: 'price/new',
    component: PriceFormComponent,
  },
  {
    path: 'price/:id/edit',
    component: PriceFormComponent,
  },
  //#endregion
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
