import { ProductQuantityModalComponent } from './../../components/product-quantity-modal/product-quantity-modal.component';
import { MakePaymentPage } from './../make-payment/make-payment.page';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-receipt',
  templateUrl: './current-receipt.page.html',
  styleUrls: ['./current-receipt.page.scss'],
})
export class CurrentReceiptPage implements OnInit {

  orders = [

    {name:"Burger Meal Chicken Burger 7" , price: 5.95},
    {name:"Burger Meal Chicken Burger 7" , price: 5.95},
    {name:"Burger Meal Chicken Burger 7" , price: 5.95}
  ];
  
  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  async checkout() {
      const modal = await this.modalController.create({
        component: MakePaymentPage,
        componentProps: { value: 123 }
      });
      return await modal.present();
  }

  async productQuantity() {

    const modal = await this.modalController.create({
      component: ProductQuantityModalComponent
    });

    return await modal.present();
  }

}
