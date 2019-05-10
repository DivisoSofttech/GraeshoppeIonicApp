import { Product } from './../../api/models/product';
import { QueryResourceService, CommandResourceService } from 'src/app/api/services';
import { ModalController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';
import {AddItemsPage} from '../add-items/add-items.page';
import { ProductDTO } from 'src/app/api/models';
import { EditProductModalComponent } from 'src/app/components/edit-product-modal/edit-product-modal.component';
import { PopoverController } from '@ionic/angular';
@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {
  @Input()
  asModal = false;
  products: Product[] = [];
accending : boolean=true;
sort()
{
  this.accending=!this.accending;
  console.log(">>>>>>>"+this.accending);
}

  constructor(
    private modalController: ModalController,
    private queryResourceservice: QueryResourceService,
    private commandResource: CommandResourceService,
   private popoverController : PopoverController
  ) { }

  async presentModal() {
    const modal = await this.modalController.create({
      component: AddItemsPage,
    });
   await modal.present();
   await modal.onDidDismiss();
   this.getproducts();
  }

  async editProductModal(product: Product) {
    console.log(' editProductModal method working with product id ='+product.id);
    const modal = await this.modalController.create({
      component: EditProductModalComponent,
      componentProps: {id: product.id}
    });
   await modal.present();
  await modal.onDidDismiss();
  console.log('...............[][][][]');
  this.getproducts();
  }
getproducts()
{
  this.queryResourceservice.findAllProductUsingGET({}).subscribe(result => {
    console.log('-----', result);
    this.products = result;
  },
  err => {
    console.log('error getting products');
  });
}
  ngOnInit() {
  this.getproducts();
  }

  delete(product: Product) {
    this.commandResource.deleteProductUsingDELETE(product.id).subscribe(res => {
      this.products.splice(this.products.indexOf(product), 1);
    },
    err => {
      console.log('Error deleting product ', product);
    });

  }

  dismiss() {
    this.modalController.dismiss();
  }

  selectProduct(product: Product) {
    this.modalController.dismiss({'selectedProduct': product});
  }

  downloadReport() {
    
  }
}
