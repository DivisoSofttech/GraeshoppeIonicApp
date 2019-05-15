import { CartService } from './../../services/cart.service';
import { ActivatedRoute } from '@angular/router';
import { ProductDTO, Product, StockCurrent } from 'src/app/api/models';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  GatewayResourceService,
  QueryResourceService
} from 'src/app/api/services';
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
    private queryResourceService: QueryResourceService,
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getProducts();
  }
  getProducts() {
    const params: QueryResourceService.FindProductByCategoryIdUsingGETParams = {
      categoryId: this.id
    };
    this.queryResourceService
      .findProductByCategoryIdUsingGET(params)
      .subscribe(result => {
        result.content.forEach(product => {

          let params: QueryResourceService.FindStockCurrentByProductIdUsingGETParams;
          params = { productId: product.id };
          this.queryResourceService
            .findStockCurrentByProductIdUsingGET(params)
            .subscribe(result => {

              if (result.content.length === 0) {
                console.log("Nooo Stockkk"+result.content);


                product.outOfStock = true;

                this.stockCurrent.push(null);
              } else {

                console.log("Stockkk Availabless "+result.content[0].sellPrice);


                if (result.content[0].units < 1) {
                  product.outOfStock = true;
                  result.content[0].product=product;
                  this.stockCurrent.push(result.content[0]);
                } else {
                  product.outOfStock = false;
                  result.content[0].product=product;
                  this.stockCurrent.push(result.content[0]);
                }
              }
            });
        });

        this.products=result.content;
        console.log("Product Size"+this.products.length);

      });

    console.log('completed');
  }

  addTicketLine(product: Product,stockCurrent: StockCurrent) {
    console.log('added Product Name'+product.name+" Price "+stockCurrent.sellPrice);
    this.cartService.addProduct(product,stockCurrent);
  }




}
