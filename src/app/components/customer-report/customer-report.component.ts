import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-report',
  templateUrl: './customer-report.component.html',
  styleUrls: ['./customer-report.component.scss'],
})
export class CustomerReportComponent implements OnInit {

  constructor(private modalController:ModalController) { }

  ngOnInit() {}

  dismiss(){
    this.modalController.dismiss({
      'dismissed':true
    });
  }
}
