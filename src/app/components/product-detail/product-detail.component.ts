import { Component, OnInit, Input } from '@angular/core';
import { ProductDTO, StockCurrentDTO } from 'src/app/api/models';
import { ModalController, LoadingController } from '@ionic/angular';
import { CommandResourceService, QueryResourceService } from 'src/app/api/services';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {

  @Input() product : ProductDTO;

  stockCurrentDto: StockCurrentDTO;
  
  loading: HTMLIonLoadingElement;

  constructor(
    private modalController: ModalController,
    private queryResourceService: QueryResourceService,
    private loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.createLoader()
    .then(() => {
      this.loading.present();
      this.queryResourceService.findStockCurrentDTOByProductIdUsingGET(this.product.id).subscribe(
        value=>{
          this.stockCurrentDto=value;
          this.loading.dismiss();
        },
        err => {
          this.loading.dismiss();
        });   
    });  
  }

  async createLoader() {

    this.loading = await this.loadingController.create({
      spinner: 'circles',
      translucent: true,
      cssClass: 'loading'
    });
  }


  dismiss() {
    this.modalController.dismiss();
  }

}
