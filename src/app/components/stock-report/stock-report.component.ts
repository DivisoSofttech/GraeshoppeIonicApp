import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-report',
  templateUrl: './stock-report.component.html',
  styleUrls: ['./stock-report.component.scss'],
})
export class StockReportComponent implements OnInit {

  constructor(private modalController:ModalController) { }

  ngOnInit() {}

  dismiss(){
    this.modalController.dismiss({
      'dismissed':true
    });
  }
}
