import { OAuthService } from 'angular-oauth2-oidc';
import { QueryResourceService } from 'src/app/api/services';
import { RecentlyUsedPage } from './../recently-used/recently-used.page';
import { CategoriesListPage } from './../categories-list/categories-list.page';

import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { SuperTabs } from '@ionic-super-tabs/angular';
import { ActionSheetController, NavController } from '@ionic/angular';
import { Product } from 'src/app/api/models';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.page.html',
  styleUrls: ['./sale.page.scss'],
})
export class SalePage implements OnInit {

  searching = false;
  total: number;
  numberOfItems: number;
  @ViewChild(SuperTabs) superTabs: SuperTabs;

  categories = CategoriesListPage;
  recentlyViewed = RecentlyUsedPage;
  products: Product[] = [];

  constructor(
        private oauthService: OAuthService,
        private actionSheetController: ActionSheetController,
        private navctrl: NavController,
        private queryResourceService: QueryResourceService) {
    this.calculateTotal();
  }

  ngOnInit() {

    
  }

  calculateTotal() {
    this.total = 30.00;
    this.numberOfItems = 8;
  }

  onSelectCart() {
    this.navctrl.navigateForward('/current-receipt');
  }

  search(event) {
    this.oauthService.loadUserProfile().then((user: any) => {
    console.log(event);
    this.searching = true;
    const params: QueryResourceService.FindAllProductBySearchTermUsingGETParams = {
      searchTerm: event,
      storeId: user.preferred_username
    };
    this.queryResourceService.findAllProductBySearchTermUsingGET(params).subscribe(result => {
      this.products = result.content;
    }, error => {
      console.log(error);
    });
  });
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
}
