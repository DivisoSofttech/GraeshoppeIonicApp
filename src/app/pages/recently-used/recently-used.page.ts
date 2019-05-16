import { Component, OnInit } from '@angular/core';
import { Product, StockCurrent } from 'src/app/api/models';
import { QueryResourceService } from 'src/app/api/services';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-recently-used',
  templateUrl: './recently-used.page.html',
  styleUrls: ['./recently-used.page.scss'],
})
export class RecentlyUsedPage implements OnInit {
  products: Product[] = [];
  stockCurrent: StockCurrent[] = [];
  constructor(
    private queryResourceService: QueryResourceService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.getProducts();
  }
  getProducts() {
    this.queryResourceService.getAllStockCurrentsUsingGET({}).subscribe( result => {
      this.stockCurrent = result;
    });
  }

  addTicketLine(product: Product, stockCurrent: StockCurrent) {
    console.log('added Product Name' + product.name + ' Price ' + stockCurrent.sellPrice);
    this.cartService.addProduct(product, stockCurrent);
  }


}
