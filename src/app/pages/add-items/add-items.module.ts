import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddItemsPage } from './add-items.page';
import { ImageCropperModule } from 'ngx-image-cropper';
const routes: Routes = [
  {
    path: '',
    component: AddItemsPage
  }
];

@NgModule({
  imports: [
    ImageCropperModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddItemsPage]
})
export class AddItemsPageModule {}
