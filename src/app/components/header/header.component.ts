import { Router, RouterLink } from '@angular/router';
import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { ActionSheetController, NavController } from '@ionic/angular';
import { Subscription, Subscriber } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  total = 0;
  numberOfItems: number;
  private subscription: Subscription;

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
  salePage()
  {
    this.navctrl.navigateForward('/sale');
  }
}
