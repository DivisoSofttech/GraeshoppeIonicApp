import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import {
  Product,
  ProductDTO,
  StockDiaryDTO,
  StockCurrentDTO
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
  selectedProduct: ProductDTO;
  searchTerm: any;
  stockCurrentDto: StockCurrentDTO;
  stockCurrentId: number;
  products: Product[] = [];
  params: QueryResourceService.FindAllProductBySearchTermUsingGETParams;
  stockDiaryDto: StockDiaryDTO = {};
  units: number;

  constructor(
    private modalController: ModalController,
    private queryResource: QueryResourceService,
    private commandResourceService: CommandResourceService,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    //   if(!this.selectedProduct==null){
    //  let params:QueryResourceService.FindStockCurrentByProductIdUsingGETParams;
    //  params={productId:this.selectedProduct.id}
    //   this.queryResource.findStockCurrentByProductIdUsingGET(params).subscribe(result=>{
    //     this.stockCurrentDto=result.content[0];
    //   });
    // }
  }

  dismiss() {
    console.log('>>>>>>>>>>>>>dismiss working');
    this.modalController.dismiss();
  }

  save() {
    console.log("this.selectedProduct.id : "+this.selectedProduct.id);
    this.stockDiaryDto.productId = this.selectedProduct.id;
    this.stockDiaryDto.isBuy = true;
    this.commandResourceService
      .createStockOfProductUsingPOST(this.stockDiaryDto)
      .subscribe(result => {
        console.log(result);
      });
  }
  selectProduct(product: Product) {
    this.queryResource.findProductUsingGET(product.id).subscribe(result => {
      this.selectedProduct = result;
    });
    console.log(product);
    let params: QueryResourceService.FindStockCurrentByProductIdUsingGETParams;
    params = { productId: product.id };
    this.queryResource
      .findStockCurrentByProductIdUsingGET(params)
      .subscribe(result => {
        if (result.content.length === 0) {
          this.units = 0;
        } else {
          console.table(result.content);
          this.units = result.content[0].units;
        }
      });
  }

  onSearchType(event) {
    const searchTerm: string = event.target.value;
    if (searchTerm.length > 2) {
      this.params = { searchTerm: searchTerm };
      this.queryResource
        .findAllProductBySearchTermUsingGET(this.params)
        .subscribe(result => {
          this.products = result.content;
          console.log("workinggggggggggggggg"+result.content.length);
        });
      // let params:QueryResourceService.FindStockCurrentByProductIdUsingGETParams;
      // params={productId:this.selectedProduct.id}
      //  this.queryResource.findStockCurrentByProductIdUsingGET(params).subscribe(result=>{
      //    this.stockCurrentDto=result.content[0];
      //  });
    }
  }

  clear() {
    this.selectedProduct = null;
  }
}
