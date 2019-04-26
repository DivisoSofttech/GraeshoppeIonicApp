import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receipts',
  templateUrl: './receipts.page.html',
  styleUrls: ['./receipts.page.scss'],
})
export class ReceiptsPage implements OnInit {

  test: boolean = false;
  id: String = '1-1001';

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  navigateToDetails() {
    this.navController.navigateForward('/receipts/' + this.id);
  }

}
