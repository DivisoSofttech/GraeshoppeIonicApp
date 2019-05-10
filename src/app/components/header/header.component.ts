import { CartService } from './../../services/cart.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActionSheetController, NavController } from '@ionic/angular';
import { Subscription, Subscriber } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Output() searchEvent = new EventEmitter();
  @Output() clearSearch = new EventEmitter();
  total = 0;
  numberOfItems: number;
  private subscription: Subscription;
  searchQuery = '';

  onSelectCart() {
    this.navctrl.navigateForward('/current-receipt');
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Graeshoppe Cart  ',
      buttons: [{
        text: this.numberOfItems + ' Items                    ' + this.total,
        icon: 'cart',
        handler: () => {
          console.log('Take photo clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  constructor(private actionSheetController: ActionSheetController,
    private navctrl: NavController,
    private cartService: CartService) {
  }

  ngOnInit() {
    this.subscription = this.cartService.observableTickets.subscribe(ticketLines => this.total = ticketLines.length);
    // this.total = this.cartService.ticketLines.length;
  }

  emitSearchEvent() {
    if (this.searchQuery === '') {
      this.clearSearch.emit(false);
    } else {
      this.searchEvent.emit(this.searchQuery);
    }
  }
}
