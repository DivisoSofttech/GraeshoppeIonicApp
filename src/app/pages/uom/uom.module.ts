import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import {AddUomPage} from '../add-uom/add-uom.page';
import { AddUomPageModule } from '../add-uom/add-uom.module';
import { UomPage } from './uom.page';

const routes: Routes = [
  {
    path: '',
    component: UomPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
    ],
  declarations: [UomPage]
})
export class UomPageModule {}
