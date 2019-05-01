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

const routes: Routes = [
  {
    path: '',
    component: ItemsPage
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
  declarations: [ItemsPage],
  entryComponents: [EditProductModalComponent]
})
export class ItemsPageModule {}
