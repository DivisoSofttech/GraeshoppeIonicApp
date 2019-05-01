import { ComponentsModule } from './../../components/components.module';
import { EditCategoryComponent } from './../../components/edit-category/edit-category.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {AddCategoriesPage} from '../add-categories/add-categories.page'
import {AddCategoriesPageModule} from '../add-categories/add-categories.module'

import { IonicModule } from '@ionic/angular';

import { CategoriesPage } from './categories.page';

import { AddCustomerPageModule } from '../add-customer/add-customer.module';

const routes: Routes = [
  {
    path: '',
    component: CategoriesPage
  }
];

@NgModule({
  imports: [
    ComponentsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CategoriesPage],
  entryComponents: [EditCategoryComponent]
})
export class CategoriesPageModule {}
