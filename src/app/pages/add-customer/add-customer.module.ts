import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddCustomerPage } from './add-customer.page';
import { CommandResourceService } from 'src/app/api/services';
import { ApiModule } from 'src/app/api/api.module';

const routes: Routes = [
  {
    path: '',
    component: AddCustomerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ApiModule.forRoot({rootUrl: 'http://35.231.213.38:9080'})

  ],
  declarations: [AddCustomerPage],
})
export class AddCustomerPageModule {}
