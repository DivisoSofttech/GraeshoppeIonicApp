import { SaleService } from './../../services/sale.service';
import { SaleAggregate } from './../../api/models/sale-aggregate';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PopoverController, NavController } from '@ionic/angular';
import { ReceiptDetailPopoverComponent } from 'src/app/components/receipt-detail-popover/receipt-detail-popover.component';

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

  constructor(private popoverController: PopoverController, private route: ActivatedRoute, private navController: NavController,private saleService:SaleService) { }

  ngOnInit() {

    this.id = this.route.snapshot.paramMap.get('id');
    this.currentSale=this.saleService.getCurrentSale();
    console.log("currentSale",this.currentSale);
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
