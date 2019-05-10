import { ComponentsModule } from './../../components/components.module';
import { DashboardPage } from './../dashboard/dashboard.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { SuperTabsModule } from '@ionic-super-tabs/angular';

import { IonicModule } from '@ionic/angular';

import { SalePage } from './sale.page';
import { AddCustomerPage } from '../add-customer/add-customer.page';
import { CustomerDetailPage } from '../customer-detail/customer-detail.page';
import { CategoriesListPage } from '../categories-list/categories-list.page';
import { RecentlyUsedPageModule } from '../recently-used/recently-used.module';
import { RecentlyUsedPage } from '../recently-used/recently-used.page';
import { CategoriesListPageModule } from '../categories-list/categories-list.module';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { SearchProductsPage } from 'src/app/components/search-products/search-products.page';

const routes: Routes = [
  {
    path: '',
    component: SalePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SuperTabsModule,
    ComponentsModule
      ],
  declarations: [SalePage],
  entryComponents: [HeaderComponent, SearchProductsPage]
})
export class SalePageModule {}
