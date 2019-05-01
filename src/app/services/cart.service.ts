import { TicketLineDTO } from "./../api/models/ticket-line-dto";
import { Injectable } from "@angular/core";
import { Product } from "../api/models";

@Injectable({
  providedIn: "root"
})
export class CartService {
  ticketLines: TicketLineDTO[] = [];
  constructor() {}

  addProduct(product: Product) {
    let added = false;
    this.ticketLines.forEach(ticket => {
      if (ticket.productId === product.id) {
        ticket.quantity++;
        ticket.total += ticket.price;
        this.printCart();
        added = true;
      }
    });
    if (!added) {
      const ticketLine: TicketLineDTO = {
        productId: product.id,
        quantity: 1,
        price: 200,
        total: 200
      };
      this.ticketLines.push(ticketLine);
      this.printCart();
    }
  }

  printCart() {
    console.log(this.ticketLines);
  }
}
