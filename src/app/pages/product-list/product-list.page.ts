import { CartService } from './../../services/cart.service';
import { ActivatedRoute } from '@angular/router';
import { ProductDTO, Product, StockCurrent } from 'src/app/api/models';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  GatewayResourceService,
  QueryResourceService
} from 'src/app/api/services';
import { OAuthService } from 'angular-oauth2-oidc';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss']
})
export class ProductListPage implements OnInit {
  id;
  products: Product[] = [];
  stockCurrent: StockCurrent[] = [];
  constructor(
    private oauthService: OAuthService,
    private queryResourceService: QueryResourceService,
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getProducts();
  }
  getProducts() {
    this.oauthService.loadUserProfile().then((user: any) => {
 
      const param: QueryResourceService.FindAllProductsByCategoryIdUsingGETParams = {categoryId: this.id, storeId:user.preferred_username};
      this.queryResourceService.findAllProductsByCategoryIdUsingGET(param).subscribe(res => {
        console.log('sucess finding all product by catgory  id ',res);
        this.products = res.content;
        this.products.forEach(pr => {
          this.queryResourceService.findStockCurrentByProductIdUsingGET({
            storeId:user.preferred_username,
            productId: pr.id
          }).subscribe(result => {
            console.log('sucss finding stock current by  product id ',result);
  
            
            this.stockCurrent.push(result);
          }, err => {
            console.log('error finding stock current by  product id ',err);
          });
        });
      }, err => {
        console.log('error finding all product by  category id ',err);
      });

    });
    // const param: QueryResourceService.FindAllStockCurrentByCategoryUsingGETParams = {categoryId: this.id};
    // this.queryResourceService.findAllStockCurrentByCategoryUsingGET(param).subscribe(res => {
    //   this.stockCurrent = res.content;
    // }, err => {
    //   console.log('error finding products');
    // });
  }

  addTicketLine(product: Product, stockCurrent: StockCurrent) {
    console.log('added Product Name' + product.name + ' Price ' + stockCurrent.sellPrice);
    this.cartService.addProduct(product, stockCurrent);
  }

}
