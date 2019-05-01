import { Product } from './../../api/models/product';
import { QueryResourceService, CommandResourceService } from 'src/app/api/services';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import {AddItemsPage} from '../add-items/add-items.page';
import { ProductDTO } from 'src/app/api/models';
import { EditProductModalComponent } from 'src/app/components/edit-product-modal/edit-product-modal.component';


@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {

  products: Product[] = [];

  constructor(
    private modalController: ModalController,
    private queryResourceservice: QueryResourceService,
    private commandResource: CommandResourceService
  ) { }

  async presentModal() {
    const modal = await this.modalController.create({
      component: AddItemsPage,
    });
    return await modal.present();
  }

  async editProductModal(product: Product) {
    const modal = await this.modalController.create({
      component: EditProductModalComponent,
      componentProps: [{id: product.id}]
    });
    return await modal.present();
  }

  ngOnInit() {
    this.queryResourceservice.findAllProductUsingGET({}).subscribe(result => {
      console.log('-----', result);
      this.products = result;
    },
    err => {
      console.log('error getting products');
    });
  }

  delete(product: Product) {
    this.commandResource.deleteProductUsingDELETE(product.id).subscribe(res => {
      this.products.splice(this.products.indexOf(product), 1);
    },
    err => {
      console.log('Error deleting product ', product);
    });
  }
}
