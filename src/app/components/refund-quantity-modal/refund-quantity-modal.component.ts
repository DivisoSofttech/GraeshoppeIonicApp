import { ModalController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-refund-quantity-modal',
  templateUrl: './refund-quantity-modal.component.html',
  styleUrls: ['./refund-quantity-modal.component.scss'],
})
export class RefundQuantityModalComponent implements OnInit {
  @Input()
  quantity: number;
  @Input()
  name: String;
  requiredQuantity = 0;
  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  dismiss(force: boolean) {
    if (force) {
      this.requiredQuantity = 0;
    }
    this.modalController.dismiss({'requiredQuantity': this.requiredQuantity});
  }

  add() {
    if (this.requiredQuantity >= this.quantity) {
      this.requiredQuantity = this.quantity;
      return;
    }
    this.requiredQuantity++;
  }

  remove() {
    if (this.requiredQuantity <= 0) {
      this.requiredQuantity = 0;
      return;
    }
    this.requiredQuantity--;
  }

  setValid() {
    if (this.requiredQuantity > this.quantity) {
      this.requiredQuantity = this.quantity;
    } else if (this.requiredQuantity < 0) {
      this.requiredQuantity = 0;
    }
  }
}
