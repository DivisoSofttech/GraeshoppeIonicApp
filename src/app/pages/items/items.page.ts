import { Product } from './../../api/models/product';
import { QueryResourceService, CommandResourceService } from 'src/app/api/services';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
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
  products: Product[] = [];

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

  // async presentPopover() {
  //   const popover = await this.popoverController.create({
  //     component: ItemSalePackageComponent,
  //     translucent: true
  //   });
  //  await popover.present();
  //  const {data} = await popover.onDidDismiss();
  //  let option : number = data.option;
  //  switch(option) { 
  //   case 1: { 
  //    this.presentModal();
  //      break; 
  //   } 
  //   // case constant_expr2: { 
  //   //    //statements; 
  //   //    break; 
  //   // } 
  //   default: {
  //      break;
  //   } 
  //  }
  // }

}
