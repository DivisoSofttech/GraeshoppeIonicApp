import { ActivatedRoute } from '@angular/router';
import { ProductDTO, Product } from 'src/app/api/models';
import { Component, OnInit } from '@angular/core';
import { GatewayResourceService, QueryResourceService } from 'src/app/api/services';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit {
  id;
  products: Product[] =  [];
  constructor(private queryResourceService: QueryResourceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getProducts();
  }
  getProducts() {
    const params: QueryResourceService.FindProductByCategoryIdUsingGETParams = {categoryId: this.id};
    this.queryResourceService.findProductByCategoryIdUsingGET(params).subscribe(result => {
      this.products = result.content;
      console.log(this.products);
    });
  }
}
