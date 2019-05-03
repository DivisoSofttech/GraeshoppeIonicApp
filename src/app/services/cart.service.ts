import { TicketLineDTO } from './../api/models/ticket-line-dto';
import { Injectable } from '@angular/core';
import { Product } from '../api/models';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  ticketLines: TicketLineDTO[] = [];
  observableTickets: BehaviorSubject<TicketLineDTO[]>;
  constructor() {
    this.observableTickets = new BehaviorSubject<TicketLineDTO[]>(this.ticketLines);
  }

  addProduct(product: Product) {
    let added = false;
    this.ticketLines.forEach(ticket => {
      if (ticket.productId === product.id) {
        ticket.quantity++;
        ticket.total += ticket.price;
        this.updateCart();
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
      this.updateCart();
    }
  }

  updateCart() {
    console.log(this.ticketLines);
    this.observableTickets.next(this.ticketLines);
  }

  emptyCart() {
    this.ticketLines = [];
    this.observableTickets.next(this.ticketLines);
  }
}
