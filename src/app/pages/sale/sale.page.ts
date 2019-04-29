import { RecentlyUsedPage } from './../recently-used/recently-used.page';
import { CategoriesListPage } from './../categories-list/categories-list.page';

import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { SuperTabs } from '@ionic-super-tabs/angular';
import { ActionSheetController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.page.html',
  styleUrls: ['./sale.page.scss'],
})
export class SalePage implements OnInit {

  total: number;
  numberOfItems: number;

  calculateTotal() {
    this.total = 30.00;
    this.numberOfItems = 8;
  }

  @ViewChild(SuperTabs) superTabs: SuperTabs;

  categories = CategoriesListPage;
  recentlyViewed = RecentlyUsedPage;

  ngAfterViewInit() {
    console.log('Super tabs is ', this.superTabs);

  }

  onSelectCart(){
    this.navctrl.navigateForward('/current-receipt');
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Graeshoppe Cart  ',
      buttons: [{
        text: this.numberOfItems + ' Items                    ' + this.total,
        icon: 'cart',
        handler: () => {
          console.log('Take photo clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  constructor(private actionSheetController: ActionSheetController,private navctrl:NavController) {
    this.calculateTotal();
  }

  ngOnInit() {

  }

}
