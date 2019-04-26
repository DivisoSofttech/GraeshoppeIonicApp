import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CurrentReceiptPage } from './current-receipt.page';

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
    RouterModule.forChild(routes)
  ],
  declarations: [CurrentReceiptPage]
})
export class CurrentReceiptPageModule {}
