import { CommandResourceService } from 'src/app/api/services';
import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SaleDTO } from 'src/app/api/models';
import { SalePage } from '../sale/sale.page';

@Component({
  selector: 'app-make-payment',
  templateUrl: './make-payment.page.html',
  styleUrls: ['./make-payment.page.scss'],
})
export class MakePaymentPage implements OnInit {
  @Input()
  toBePaid;
  @Input()
  customerId;
  cashRecieved: Number;
  sale: SaleDTO = {};

  constructor(
    private modalController: ModalController,
    private commandResourceService: CommandResourceService
  ) { }

  dismiss() {
    this.modalController.dismiss();
  }
  ngOnInit() {
    this.cashRecieved = this.toBePaid;
    this.sale.customerId = this.customerId;
    this.sale.grandTotal = this.toBePaid;
  }

  async returnToSale() {
    const modal = await this.modalController.create({
      component: SalePage
    });

    return await modal.present();
  }

  save() {
    if (this.cashRecieved >= this.toBePaid) {
      this.commandResourceService.createSaleUsingPOST(this.sale).subscribe(result => {
        console.log(result);
      });
    }
  }

}
