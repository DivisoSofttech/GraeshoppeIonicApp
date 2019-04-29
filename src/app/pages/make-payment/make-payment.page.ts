import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-make-payment',
  templateUrl: './make-payment.page.html',
  styleUrls: ['./make-payment.page.scss'],
})
export class MakePaymentPage implements OnInit {

  cashRecieved: Number = 22;

  constructor(
    private modalController: ModalController
  ) { }

  dismiss() {
    this.modalController.dismiss();
  }
  ngOnInit() {
  }

}
