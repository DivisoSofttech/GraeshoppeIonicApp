import { EditProductModalComponent } from './../../components/edit-product-modal/edit-product-modal.component';
import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {AddItemsPage} from '../add-items/add-items.page'
import {AddItemsPageModule} from '../add-items/add-items.module'

import { IonicModule } from '@ionic/angular';

import { ItemsPage } from './items.page';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { AddItemFromCSVComponent } from 'src/app/components/add-item-from-csv/add-item-from-csv.component';
import { ProductDetailComponent } from 'src/app/components/product-detail/product-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ItemsPage
  }
];

@NgModule({
  imports: [
    ComponentsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ItemsPage],
  entryComponents: [EditProductModalComponent,AddItemFromCSVComponent,
    HeaderComponent, ProductDetailComponent]
})
export class ItemsPageModule {}
