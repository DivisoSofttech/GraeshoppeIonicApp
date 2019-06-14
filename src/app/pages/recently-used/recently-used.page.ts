import { Component, OnInit } from '@angular/core';
import { Product, StockCurrent } from 'src/app/api/models';
import { QueryResourceService } from 'src/app/api/services';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-recently-used',
  templateUrl: './recently-used.page.html',
  styleUrls: ['./recently-used.page.scss'],
})
export class RecentlyUsedPage implements OnInit {
  products: Product[] = [];
  stockCurrent: StockCurrent[] = [];
  constructor(
    private oauthService: OAuthService,
    private queryResourceService: QueryResourceService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.getProducts();
  }
  getProducts() {
    this.oauthService.loadUserProfile().then((user: any) => {
      this.queryResourceService.getAllStockCurrentsUsingGET({
        storeId: user.preferred_username
      }).subscribe( result => {
        this.stockCurrent = result.content;
      });
    });
  }

  addTicketLine(product: Product, stockCurrent: StockCurrent) {
    console.log('added Product Name' + product.name + ' Price ' + stockCurrent.sellPrice);
    this.cartService.addProduct(product, stockCurrent);
  }


}
