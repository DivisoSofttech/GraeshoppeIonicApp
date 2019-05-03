import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CustomersPage } from './customers.page';
import { EditCategoryComponent } from 'src/app/components/edit-category/edit-category.component';
import { EditCustomerComponent } from 'src/app/components/edit-customer/edit-customer.component';

const routes: Routes = [
  {
    path: '',
    component: CustomersPage
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
  declarations: [CustomersPage],
  entryComponents: [EditCustomerComponent]
})
export class CustomersPageModule { }
