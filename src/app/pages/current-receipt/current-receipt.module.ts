import { ProductQuantityModalComponent } from './../../components/product-quantity-modal/product-quantity-modal.component';
import { ComponentsModule } from './../../components/components.module';
import { MakePaymentPage } from './../make-payment/make-payment.page';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CurrentReceiptPage } from './current-receipt.page';
import { MakePaymentPageModule } from '../make-payment/make-payment.module';
import { CustomersPageModule } from '../customers/customers.module';
import { CustomersPage } from '../customers/customers.page';
import { BilloptionsComponent } from 'src/app/components/billoptions/billoptions.component';

const routes: Routes = [
  {
    path: '',
    component: CurrentReceiptPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MakePaymentPageModule,
    ComponentsModule,
    // CustomersPageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CurrentReceiptPage],
  entryComponents: [MakePaymentPage , ProductQuantityModalComponent,BilloptionsComponent]
})
export class CurrentReceiptPageModule {}
