import { Product } from './product';
import { TicketLineDTO } from '../models';

export interface ReceiptModel {
  ticketLine?: TicketLineDTO;
  product?: Product;
}
