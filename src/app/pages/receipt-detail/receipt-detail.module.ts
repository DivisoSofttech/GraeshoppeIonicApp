import { ComponentsModule } from './../../components/components.module';
import { ReceiptDetailPopoverComponent } from './../../components/receipt-detail-popover/receipt-detail-popover.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ReceiptDetailPage } from './receipt-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ReceiptDetailPage
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
  declarations: [ReceiptDetailPage],
  entryComponents: [ReceiptDetailPopoverComponent]
})
export class ReceiptDetailPageModule {}
