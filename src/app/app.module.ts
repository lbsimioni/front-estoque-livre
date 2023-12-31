import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MatFormFieldModule,
} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatChipsModule } from '@angular/material/chips';

import { NgxCurrencyModule } from 'ngx-currency';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './menu/sidebar/sidebar.component';
import { NavbarComponent } from './menu/navbar/navbar.component';
import { MerchandiseListComponent } from './merchandise/merchandise-list/merchandise-list.component';
import { MerchandiseFormComponent } from './merchandise/merchandise-form/merchandise-form.component';
import { PriceListComponent } from './price/price-list/price-list.component';
import { PriceFormComponent } from './price/price-form/price-form.component';
import { StockListComponent } from './stock/stock-list/stock-list.component';
import { StockFormComponent } from './stock/stock-form/stock-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MerchandiseService } from './merchandise/merchandise.service';
import { MerchandiseListResolver } from './merchandise/merchandise-list/merchandise-list.resolver';
import { MerchandiseEditResolver } from './merchandise/merchandise-form/merchandise-edit.resolver';
import { StockService } from './stock/stock.service';
import { StockListResolver } from './stock/stock-list/stock-list.resolver';
import { PriceService } from './price/price.service';
import { PriceListResolver } from './price/price-list/price-list.resolver';
import { AlertComponent } from './alert/alert.component';
import { AlertService } from './alert/alert.service';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    MerchandiseListComponent,
    MerchandiseFormComponent,
    PriceListComponent,
    PriceFormComponent,
    StockListComponent,
    StockFormComponent,
    DashboardComponent,
    AlertComponent,
  ],
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatSelectModule,
    NgxCurrencyModule,
    MatTableModule,
    MatSortModule,
    MatChipsModule,
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'outline' },
    },
    MerchandiseService,
    MerchandiseListResolver,
    MerchandiseEditResolver,
    StockService,
    StockListResolver,
    PriceService,
    PriceListResolver,
    AlertService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
