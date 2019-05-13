import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { ItemsPage } from "../items/items.page";
import { AddStockComponent } from "src/app/components/add-stock/add-stock.component";
import {
  CommandResourceService,
  QueryResourceService
} from "src/app/api/services";
import { StockCurrent, ProductDTO } from "src/app/api/models";

@Component({
  selector: "app-stock-management",
  templateUrl: "./stock-management.page.html",
  styleUrls: ["./stock-management.page.scss"]
})
export class StockManagementPage implements OnInit {
  public progress: number = 0;
  public pressState: string = "released";
  stock: StockCurrent[] = [];
  params: QueryResourceService.GetAllStockCurrentsUsingGETParams;
  paramsProductName: QueryResourceService.FindStockCurrentByProductNameUsingGETParams;

  protected interval: any;
  selectedProduct: any;
  public searchTerm: any;

  constructor(
    private modalController: ModalController,
    private queryResource: QueryResourceService,
    private commandResourceService: CommandResourceService
  ) {}

  ngOnInit() {
    this.params = {};
    this.queryResource
      .getAllStockCurrentsUsingGET(this.params)
      .subscribe(result => {
        this.stock = result;
      });
  }

  async presentModal(currentStock,item, units) {
    if (item === null) {
      const modal = await this.modalController.create({
        component: AddStockComponent
      });
      await modal.present();
      await modal.onDidDismiss().then(() => {
        console.log("on did dismiss");
        this.params = {};
        this.queryResource
          .getAllStockCurrentsUsingGET(this.params)
          .subscribe(result => {
            this.stock = result;
          });
      });
    } else {
      const modal = await this.modalController.create({
        component: AddStockComponent,
        componentProps: {
          selectedProduct: item,
          units: units,
          stockCurrentDto: currentStock
        }
      });
      await modal.present();
      await modal.onDidDismiss().then(() => {
        console.log("on did dismiss");
        this.params = {};
        this.queryResource
          .getAllStockCurrentsUsingGET(this.params)
          .subscribe(result => {
            this.stock = result;
          });
      });
    }
  }
  onSearchType(event) {
    console.log("event searchitem" + event.target.value);
    let searchTerm: string = event.target.value;
    if (searchTerm.length > 3) {
      this.paramsProductName = { name: searchTerm };
      this.queryResource
        .findStockCurrentByProductNameUsingGET(this.paramsProductName)
        .subscribe(result => {
          this.stock = result.content;
        });
    }
  }

  doRefresh(event) {
    this.params = {};
    this.queryResource
      .getAllStockCurrentsUsingGET(this.params)
      .subscribe(result => {
        this.stock = result;
      });
    console.log("Begin async operation");

    setTimeout(() => {
      console.log("Async operation has ended");
      event.target.complete();
    }, 2000);
  }
}
