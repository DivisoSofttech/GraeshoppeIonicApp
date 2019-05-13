import { SaleService } from './../../services/sale.service';
import { LoadingService, loading } from './../../services/loading.service';
import { SaleAggregate } from './../../api/models/sale-aggregate';
import { QueryResourceService } from 'src/app/api/services';
import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-receipts',
  templateUrl: './receipts.page.html',
  styleUrls: ['./receipts.page.scss'],
})
export class ReceiptsPage implements OnInit {

  test: boolean = false;
  id: String = '1-1001';
  sales: SaleAggregate[];

  constructor(private navController: NavController,
    private queryResourceService: QueryResourceService,
    private loadingService:LoadingService,
    private saleService: SaleService) { }

  ngOnInit() {

    //this.presentLoading();
    //this.loadingService.presentLoading();
   let params: QueryResourceService.FindAllSaleAggregatesUsingGETParams={};
    this.queryResourceService.findAllSaleAggregatesUsingGET(params)
      .subscribe(response => {
        console.log(response);
        this.sales = response;
        //this.loadingController.dismiss();
        //loading.dismiss();
      });
  }

/*   async presentLoading() {
    const loading = await this.loadingController.create({
      spinner: "dots"
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();

    console.log('Loading dismissed!');
  } */

  navigateToDetails(currentSale: SaleAggregate) {

    this.saleService.setCurrentSale(currentSale);
    this.navController.navigateForward('/receipts/' + this.id);
  }

}
