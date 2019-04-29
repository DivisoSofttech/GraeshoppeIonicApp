import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-quantity-modal',
  templateUrl: './product-quantity-modal.component.html',
  styleUrls: ['./product-quantity-modal.component.scss'],
})
export class ProductQuantityModalComponent implements OnInit {


  @Input() quantity: number;

  @Input() requiredQuantity = 0;

  @Input() product = {
    name: 'Soap',
    price: 12.00
  }

  constructor() { }

  ngOnInit() {}

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
