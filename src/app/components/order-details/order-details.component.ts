import { ModalController } from '@ionic/angular';
import { Order } from './../../api/models/order';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss'],
})
export class OrderDetailsComponent implements OnInit {

  order: Order;
  
  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {}

  dismiss() {
    this.modalCtrl.dismiss();
  }

}
