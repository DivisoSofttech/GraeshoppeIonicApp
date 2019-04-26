import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RecentlyUsedPage } from './recently-used.page';

const routes: Routes = [
  {
    path: '',
    component: RecentlyUsedPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RecentlyUsedPage]
})
export class RecentlyUsedPageModule {}
