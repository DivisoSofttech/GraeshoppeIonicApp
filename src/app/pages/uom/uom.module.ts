import { EditUomComponent } from './../../components/edit-uom/edit-uom.component';
import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import {AddUomPage} from '../add-uom/add-uom.page';
import { AddUomPageModule } from '../add-uom/add-uom.module';
import { UomPage } from './uom.page';
import { HeaderComponent } from 'src/app/components/header/header.component';

const routes: Routes = [
  {
    path: '',
    component: UomPage
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
  declarations: [UomPage],
  entryComponents: [HeaderComponent,EditUomComponent]
})
export class UomPageModule {}
