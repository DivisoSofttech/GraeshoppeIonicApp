import { Component, OnInit, Input } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import {
  Product,
  ProductDTO,
  StockDiaryDTO,
  StockCurrentDTO,
  StockCurrent
} from 'src/app/api/models';
import { stringify } from '@angular/core/src/render3/util';
import {
  QueryResourceService,
  CommandResourceService
} from 'src/app/api/services';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.scss']
})
export class AddStockComponent implements OnInit {
  @Input()
  stockCurrent: StockCurrent;
  stockCurrentDTO: StockCurrentDTO;
  stockDiary: StockDiaryDTO = {};
  units;

  constructor(
    private modalController: ModalController,
    private queryResource: QueryResourceService,
    private commandResourceService: CommandResourceService,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.queryResource.findOneStockCurrentUsingGET(this.stockCurrent.id).subscribe(res => {
      this.stockCurrentDTO = res;
      this.units = res.units;
    }, err => {
      this.toastView('error getting stock data');
    });
  }

  async toastView(message) {
    const toast = await this.toastController.create({
      message: message,
      cssClass: 'toast',
      duration: 2000
    });
    toast.present();
  }

  dismiss() {
    this.modalController.dismiss();
  }

  save() {
    if (this.stockDiary.units > 0) {
      this.stockDiary.productId = this.stockCurrentDTO.productId;
      this.commandResourceService.createStockOfProductUsingPOST(this.stockDiary).subscribe(res => {
        console.log("result :"+res);
        this.toastView('Successfully updated stock data');
        this.dismiss();
      }, err => {
        this.toastView('Error updating stock data');
      });
    }
  }

}
