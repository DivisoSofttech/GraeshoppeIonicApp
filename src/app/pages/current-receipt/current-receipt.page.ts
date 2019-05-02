import { CustomersPage } from './../customers/customers.page';
import { CustomerDTO } from './../../api/models/customer-dto';
import { QueryResourceService } from 'src/app/api/services';
import { CartService } from './../../services/cart.service';
import { TicketLineDTO } from './../../api/models/ticket-line-dto';
import { ProductQuantityModalComponent } from './../../components/product-quantity-modal/product-quantity-modal.component';
import { MakePaymentPage } from './../make-payment/make-payment.page';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ProductDTO } from 'src/app/api/models';

@Component({
  selector: 'app-current-receipt',
  templateUrl: './current-receipt.page.html',
  styleUrls: ['./current-receipt.page.scss']
})
export class CurrentReceiptPage implements OnInit {
  ticketLines: TicketLineDTO[] = [];
  products: ProductDTO[] = [];
  customer: CustomerDTO;
  total = 0;
  deliveryFee = 50;

  constructor(
    private modalController: ModalController,
    private cartService: CartService,
    private queryResourceService: QueryResourceService
  ) {}

  ngOnInit() {
    this.ticketLines = this.cartService.ticketLines;
    this.ticketLines.forEach(ticket => {
      this.total += ticket.total;
      this.queryResourceService
        .findProductUsingGET(ticket.productId)
        .subscribe(result => {
          this.products.push(result);
          console.log(result);
        });
    });
  }

  async checkout() {
    const modal = await this.modalController.create({
      component: MakePaymentPage,
      componentProps: { ticketLines: this.ticketLines, toBePaid: this.total + this.deliveryFee, customerId: this.customer.id }
    });
    return await modal.present();
  }

  async productQuantity() {
    const modal = await this.modalController.create({
      component: ProductQuantityModalComponent
    });

    return await modal.present();
  }

  getProduct(ticket: TicketLineDTO): ProductDTO {
    return this.products[this.ticketLines.indexOf(ticket)];
  }

  async setCustomer() {
    const modal = await this.modalController.create({
      component: CustomersPage,
      componentProps: {asModal: true}
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    this.customer = data.selectedCustomer;
    console.log(this.customer)
  }
}
