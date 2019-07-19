import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SettingsPage } from './settings.page';
import { RestaurantComponent } from 'src/app/components/restaurant/restaurant.component';
import { ComponentsModule } from 'src/app/components/components.module';

const routes: Routes = [
  {
    path: '',
    component: SettingsPage
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
  declarations: [SettingsPage],
  entryComponents: [RestaurantComponent]
})
export class SettingsPageModule {}
