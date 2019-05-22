import { Product } from './../../api/models/product';
import {
  QueryResourceService,
  CommandResourceService
} from 'src/app/api/services';
import { ModalController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';
import { AddItemsPage } from '../add-items/add-items.page';
import { ProductDTO } from 'src/app/api/models';
import { EditProductModalComponent } from 'src/app/components/edit-product-modal/edit-product-modal.component';
import { PopoverController } from '@ionic/angular';
import { File } from '@ionic-native/file/ngx';
import { DocumentViewer } from '@ionic-native/document-viewer/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss']
})
export class ItemsPage implements OnInit {
  products: Product[] = [];
  accending = true;
  sort() {
    this.accending = !this.accending;
  }

  constructor(
    private modalController: ModalController,
    private queryResourceservice: QueryResourceService,
    private commandResource: CommandResourceService,
    private popoverController: PopoverController,
    private file: File,
    private documentViewer: DocumentViewer,
    private fileTransfer: FileTransfer
  ) {}

  async presentModal() {
    const modal = await this.modalController.create({
      component: AddItemsPage
    });
    await modal.present();
    await modal.onDidDismiss();
    this.getproducts();
  }

  async editProductModal(product: Product) {
    console.log(
      ' editProductModal method working with product id =' + product.id
    );
    const modal = await this.modalController.create({
      component: EditProductModalComponent,
      componentProps: { id: product.id }
    });
    return await modal.present();
    // console.log('...............[][][][]');
    // this.getproducts();
  }
  getproducts() {
    this.queryResourceservice.findAllProductUsingGET({}).subscribe(
      result => {
        console.log('-----', result);
        this.products = result;
      },
      err => {
        console.log('error getting products');
      }
    );
  }
  ngOnInit() {
    this.getproducts();
  }

  delete(product: Product) {
    this.commandResource.deleteProductUsingDELETE(product.id).subscribe(
      res => {
        this.products.splice(this.products.indexOf(product), 1);
      },
      err => {
        console.log('Error deleting product ', product);
      }
    );
  }

  dismiss() {
    this.modalController.dismiss();
  }

  downloadReport() {
    console.log('downloading is working');
    this.queryResourceservice.exportProductsUsingGET().subscribe(result => {
      const byteCharacters = atob(result.pdf);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: result.contentType });
      console.log('blob is' + blob);
      this.file.createFile(this.file.externalCacheDirectory, 'items.pdf', true).then(() => {
        console.log('file created' + blob);

        this.file.writeFile(this.file.externalCacheDirectory, 'items.pdf', blob,{replace:true}).then(
          (value) => {
            console.log('file writed' + value);

            this.documentViewer.viewDocument(this.file.externalCacheDirectory+'new.pdf','application/pdf',{});


        });
      });
    });
  }
}
