import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ItemsPage } from '../items/items.page';
import { AddStockComponent } from 'src/app/components/add-stock/add-stock.component';
import {
  CommandResourceService,
  QueryResourceService
} from 'src/app/api/services';
import { StockCurrent, ProductDTO } from 'src/app/api/models';

@Component({
  selector: 'app-stock-management',
  templateUrl: './stock-management.page.html',
  styleUrls: ['./stock-management.page.scss']
})
export class StockManagementPage implements OnInit {
  public progress = 0;
  public pressState = 'released';
  stock: StockCurrent[] = [];
  params: QueryResourceService.GetAllStockCurrentsUsingGETParams;

  protected interval: any;
  selectedProduct: any;
  public searchTerm: any;

  constructor(
    private modalController: ModalController,
    private queryResource: QueryResourceService,
    private commandResourceService: CommandResourceService
  ) {}

  ngOnInit() {
    this.getAllStocks();
  }

  getAllStocks() {
    this.params = {};
    this.queryResource
      .getAllStockCurrentsUsingGET(this.params)
      .subscribe(result => {
        this.stock = result;
      });
  }

  async presentModal(item: StockCurrent) {
    const modal = await this.modalController.create({
      component: AddStockComponent,
      componentProps: {stockCurrent: item}
    });
    await modal.present();
    await modal.onDidDismiss().then(() => {
      this.getAllStocks();
    });
  }
  onSearchType(event) {
    console.log('event searchitem' + event.target.value);
    const searchTerm: string = event.target.value;
    if (searchTerm.length > 3) {
      const paramsProductName = { name: searchTerm };
      this.queryResource
        .findAllStockCurrentByProductNameUsingGET(paramsProductName)
        .subscribe(result => {
          this.stock = result.content;
        }, err => {
          console.log('error getting data', err);
        });
    } else if (searchTerm === '') {
      this.getAllStocks();
    }
  }

  doRefresh(event) {
    this.getAllStocks();
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
}
