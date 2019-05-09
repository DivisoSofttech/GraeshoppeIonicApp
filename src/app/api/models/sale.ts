/* tslint:disable */
import { TicketLine } from './ticket-line';
export interface Sale {
  customerId?: number;
  grandTotal?: number;
  id?: number;
  ticketLines?: Array<TicketLine>;
}
