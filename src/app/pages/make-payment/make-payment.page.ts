import { CartService } from './../../services/cart.service';
import { TicketLineDTO } from './../../api/models/ticket-line-dto';
import { CommandResourceService } from 'src/app/api/services';
import { Component, OnInit, Input } from '@angular/core';
import {
  ModalController,
  NavController,
  ToastController
} from '@ionic/angular';
import { SaleDTO, StockDiaryDTO } from 'src/app/api/models';
import { SalePage } from '../sale/sale.page';

@Component({
  selector: 'app-make-payment',
  templateUrl: './make-payment.page.html',
  styleUrls: ['./make-payment.page.scss']
})
export class MakePaymentPage implements OnInit {
  @Input()
  ticketLines: TicketLineDTO[] = [];
  @Input()
  toBePaid;
  @Input()
  customerId;
  cashRecieved: Number;
  sale: SaleDTO = {};

  constructor(
    private modalController: ModalController,
    private commandResourceService: CommandResourceService,
    private navController: NavController,
    private cartService: CartService,
    private toastController: ToastController
  ) {}

  dismiss() {
    this.modalController.dismiss();
  }
  ngOnInit() {
    this.cashRecieved = this.toBePaid;
    this.sale.customerId = this.customerId;
    this.sale.grandTotal = this.toBePaid;
  }

  returnToSale() {
    this.navController.navigateRoot('/sale');
  }

  save() {
    if (this.cashRecieved >= this.toBePaid) {
      this.commandResourceService
        .createSaleUsingPOST(this.sale)
        .subscribe(res => {
          console.log(res);
          this.sale = res;
          this.ticketLines.forEach(ticket => {
            ticket.saleId = this.sale.id;
            this.commandResourceService
              .createTickerLineUsingPOST(ticket)
              .subscribe(result => {
                ticket = result;
                let stockDiary: StockDiaryDTO = {};
                //stockDiary.dateOfCreation = '' + new Date();
                stockDiary.isBuy = false;
                stockDiary.units = -1 * ticket.quantity;
                stockDiary.price = ticket.price;
                stockDiary.productId=ticket.productId;
                this.commandResourceService
                  .createStockOfProductUsingPOST(stockDiary)
                  .subscribe(result => {
                    console.log(result);
                  });
              });
          });
          this.returnToSale();
          this.cartService.emptyCart();
          this.toastView();
          this.dismiss();
        });
    }
  }

  async toastView() {
    const toast = await this.toastController.create({
      message: 'Thank you for shopping',
      cssClass: 'toast',
      duration: 2000
    });
    toast.present();
  }
}
