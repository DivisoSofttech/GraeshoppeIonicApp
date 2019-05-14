import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/api/models';
import { QueryResourceService } from 'src/app/api/services';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-search-products',
  templateUrl: './search-products.page.html',
  styleUrls: ['./search-products.page.scss'],
})
export class SearchProductsPage implements OnInit {

  @Input()
  products: Product[] =  [];
  constructor(private queryResourceService: QueryResourceService,
    private route: ActivatedRoute,
    private  cartService: CartService) { }

  ngOnInit() {
  }

  addTicketLine(product: Product) {
    console.log('added');
    this.cartService.addProduct(product,null);
  }

}
