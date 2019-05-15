import { SaleService } from './../../services/sale.service';
import { RefundQuantityModalComponent } from './../../components/refund-quantity-modal/refund-quantity-modal.component';
import { ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SaleAggregate } from 'src/app/api/models';

@Component({
  selector: 'app-refund',
  templateUrl: './refund.page.html',
  styleUrls: ['./refund.page.scss'],
})
export class RefundPage implements OnInit {
  id: String;
  quantity = 2;
  price = 2.58;
  refundQuantity = 0;
  selected = false;
  total = 0.00;
  currentSale: SaleAggregate;
  constructor(private route: ActivatedRoute, private modalController: ModalController, private saleService: SaleService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.currentSale = this.saleService.getCurrentSale();
  }

  async presentModal() {
    if (!this.selected && this.quantity > 1) {
      const modal = await this.modalController.create({
        component: RefundQuantityModalComponent,
        componentProps: { quantity: this.quantity,
        name: 'Product Name' }
      });
      await modal.present();
      const { data } = await modal.onDidDismiss();
      this.refundQuantity = data.requiredQuantity;
      this.total = (this.price / this.quantity) * this.refundQuantity;
      if (this.refundQuantity === 0) {
        this.selected = false;
      }
    } else if (!this.selected && this.quantity === 1) {
      this.total = this.price;
    } else if (this.selected) {
      this.total = 0;
    }
  }
}
