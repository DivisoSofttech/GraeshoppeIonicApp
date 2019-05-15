import { ProductDTO } from './../../api/models/product-dto';
import { Product } from 'src/app/api/models';
import { SaleService } from './../../services/sale.service';
import { SaleAggregate } from './../../api/models/sale-aggregate';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PopoverController, NavController } from '@ionic/angular';
import { ReceiptDetailPopoverComponent } from 'src/app/components/receipt-detail-popover/receipt-detail-popover.component';
import { QueryResourceService } from 'src/app/api/services';

@Component({
  selector: 'app-receipt-detail',
  templateUrl: './receipt-detail.page.html',
  styleUrls: ['./receipt-detail.page.scss'],
})
export class ReceiptDetailPage implements OnInit {

  id: string;
  quantity = 2;
  unitPrice = 1.29;
  currentSale: SaleAggregate;
  products: ProductDTO[] = [];

  constructor(private popoverController: PopoverController,
              private route: ActivatedRoute,
              private navController: NavController,
              private saleService: SaleService,
              private queryResource: QueryResourceService) { }

  ngOnInit() {

    this.id = this.route.snapshot.paramMap.get('id');
    this.currentSale = this.saleService.getCurrentSale();
    this.currentSale.ticketLines.forEach(element => {
      this.queryResource.findProductUsingGET(element.productId)
        .subscribe(product => {
          this.products.push(product);
          console.log('product: ', product);
        });
    });
    console.log('currentSale', this.currentSale);
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: ReceiptDetailPopoverComponent,
      event: ev,
      translucent: true,
      showBackdrop: false,
      backdropDismiss: true
    });
    return await popover.present();
  }

  navigateToRefund() {

    this.navController.navigateForward(/refund/ + this.id);
  }

}
