import { Component, OnInit } from '@angular/core';
import { ActionSheetController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  total: number;
  numberOfItems: number;

  calculateTotal() {
    this.total = 30.00;
    this.numberOfItems = 8;
  }

 
  onSelectCart(){
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

  constructor(private actionSheetController: ActionSheetController,private navctrl:NavController) {
    this.calculateTotal();
  }

  ngOnInit() {

  }
}
