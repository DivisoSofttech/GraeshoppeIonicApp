import { RefundQuantityModalComponent } from './../../components/refund-quantity-modal/refund-quantity-modal.component';
import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RefundPage } from './refund.page';

const routes: Routes = [
  {
    path: '',
    component: RefundPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  declarations: [RefundPage],
  entryComponents: [RefundQuantityModalComponent]
})
export class RefundPageModule {}
