import { TicketLineDTO } from './../../api/models/ticket-line-dto';
import { CommandResourceService } from 'src/app/api/services';
import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { SaleDTO } from 'src/app/api/models';
import { SalePage } from '../sale/sale.page';

@Component({
  selector: 'app-make-payment',
  templateUrl: './make-payment.page.html',
  styleUrls: ['./make-payment.page.scss'],
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
    private navController: NavController
  ) { }

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
      this.commandResourceService.createSaleUsingPOST(this.sale).subscribe(res => {
        console.log(res);
        this.sale = res;
        this.ticketLines.forEach(ticket => {
          ticket.saleId =  this.sale.id;
          this.commandResourceService.createTickerLineUsingPOST(ticket).subscribe(result => {
            ticket =  result;
          });
        });
        this.returnToSale();
        this.dismiss();
      });
    }
  }

}
