import { AddItemsPage } from './../add-items/add-items.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StockManagementPage } from './stock-management.page';
import { AddStockComponent } from 'src/app/components/add-stock/add-stock.component';
import { ComponentsModule } from 'src/app/components/components.module';


const routes: Routes = [
  {
    path: '',
    component: StockManagementPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StockManagementPage],
  entryComponents: [AddStockComponent]
})
export class StockManagementPageModule {}
