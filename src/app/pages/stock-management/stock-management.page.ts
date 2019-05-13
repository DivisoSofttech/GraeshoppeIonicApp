import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { ItemsPage } from "../items/items.page";
import { AddStockComponent } from "src/app/components/add-stock/add-stock.component";
import { CommandResourceService, QueryResourceService } from 'src/app/api/services';
import { StockCurrent, ProductDTO } from 'src/app/api/models';

@Component({
  selector: "app-stock-management",
  templateUrl: "./stock-management.page.html",
  styleUrls: ["./stock-management.page.scss"]
})
export class StockManagementPage implements OnInit {

  public progress: number = 0;
  public pressState: string = "released";
  stock:StockCurrent[]=[];
  params: QueryResourceService.GetAllStockCurrentsUsingGETParams;
  paramsProductName: QueryResourceService.FindStockCurrentByProductNameUsingGETParams
  // Interval function
  protected interval: any;
  selectedProduct: any;
  public searchTerm: any;

  constructor(private modalController: ModalController,private queryResource: QueryResourceService,
    private commandResourceService: CommandResourceService) {}

  ngOnInit() {
    this.params={};
    this.queryResource.getAllStockCurrentsUsingGET(this.params).subscribe(result=>{
    this.stock=result;
    });
  }



  filterItems(searchTerm) {

    if(searchTerm.length>3){

     // this.queryResource.findProductUsingGET().subscribe(result=>{});

    // return this.items.filter(item => {
    //   return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;

    // });
    }
  }
  async presentModal(item,units) {
    //  const modal = await this.modalController.create({
    //    component: ItemsPage,
    //    componentProps: {asModal: true}
    //  });
    //  await modal.present();
    //  const {data} = await modal.onDidDismiss();
    // console.log(data.selectedProduct);
    if (item === null) {
      const modal = await this.modalController.create({
        component: AddStockComponent
      });
      await modal.present();
      await modal.onDidDismiss();
    }
    else {
      const modal = await this.modalController.create({
        component: AddStockComponent,
        componentProps: {
          selectedProduct:item,
          units:units
      }});
      await modal.present();
      await modal.onDidDismiss();
    }
  }
  onSearchType(event) {

    console.log("event searchitem" + event.target.value);
    let searchTerm: string = event.target.value;
    if (searchTerm.length > 3) {
    this.paramsProductName={name:searchTerm};
    this.queryResource.findStockCurrentByProductNameUsingGET(this.paramsProductName).subscribe(result=>{
      this.stock=result.content;
    });
    }
  }
  // Controller Functions
  onPress($event) {
    console.log("onPress", $event);
    this.startInterval();
  }


  onPressUp($event) {
    console.log("onPressUp", $event);
    this.stopInterval();
  }
  startInterval() {
    const self = this;
    this.interval = setInterval(function() {
      self.progress = self.progress + 1;
    }, 50);
  }

  stopInterval() {
    clearInterval(this.interval);
  }
  getProoduct(id:number): ProductDTO {
   let product: ProductDTO;
   this.queryResource.findProductUsingGET(id).subscribe(result=>{
    product=result;
   });
return product;
  }
  doRefresh(event){

    this.params={};
    this.queryResource.getAllStockCurrentsUsingGET(this.params).subscribe(result=>{
    this.stock=result;
    });
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

}
