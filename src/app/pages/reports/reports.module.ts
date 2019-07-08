
import { ComponentsModule } from 'src/app/components/components.module';
import { SalesReportComponent } from 'src/app/components/sales-report/sales-report.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ReportsPage } from './reports.page';
import { CustomerReportComponent } from 'src/app/components/customer-report/customer-report.component';
import { ProductReportComponent } from 'src/app/components/product-report/product-report.component';
import { StockReportComponent } from 'src/app/components/stock-report/stock-report.component';

const routes: Routes = [
  {
    path: '',
    component: ReportsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ReportsPage],
  entryComponents:[SalesReportComponent,
  ProductReportComponent ,
  CustomerReportComponent,
  StockReportComponent ]
})
export class ReportsPageModule {}
