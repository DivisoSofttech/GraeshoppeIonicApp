import { SaleAggregate } from './../api/models/sale-aggregate';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  currentSale: SaleAggregate;

  constructor() { }

  public getCurrentSale() {
    return this.currentSale;
  }

  public setCurrentSale(sale: SaleAggregate) {
    this.currentSale = sale;
  }
}
