
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { SalesReportComponent } from 'src/app/components/sales-report/sales-report.component';
import { CustomerReportComponent } from 'src/app/components/customer-report/customer-report.component';
import { StockReportComponent } from 'src/app/components/stock-report/stock-report.component';
import { ProductReportComponent } from 'src/app/components/product-report/product-report.component';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.page.html',
  styleUrls: ['./reports.page.scss'],
})
export class ReportsPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  async saleReportModal() {
    const modal = await this.modalController.create({
      component: SalesReportComponent
    });
    return await modal.present();
  }
  async stockReportModal() {
    const modal = await this.modalController.create({
      component: StockReportComponent
    });
    return await modal.present();
  }
  async productReportModal() {
    const modal = await this.modalController.create({
      component: ProductReportComponent
    });
    return await modal.present();
  }
  async customerReportModal() {
    const modal = await this.modalController.create({
      component: CustomerReportComponent
    });
    return await modal.present();
  }
  
}
