import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SearchResultsProductsPage } from './search-results-products.page';

const routes: Routes = [
  {
    path: '',
    component: SearchResultsProductsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SearchResultsProductsPage]
})
export class SearchResultsProductsPageModule {}
