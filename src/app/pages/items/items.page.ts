import { OAuthService } from 'angular-oauth2-oidc';
import { Product } from './../../api/models/product';
import {
  QueryResourceService,
  CommandResourceService
} from 'src/app/api/services';
import { ModalController, LoadingController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';
import { AddItemsPage } from '../add-items/add-items.page';
import { ProductDTO } from 'src/app/api/models';
import { EditProductModalComponent } from 'src/app/components/edit-product-modal/edit-product-modal.component';
import { PopoverController } from '@ionic/angular';
import { File } from '@ionic-native/file/ngx';
import { DocumentViewer } from '@ionic-native/document-viewer/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { AddItemFromCSVComponent } from 'src/app/components/add-item-from-csv/add-item-from-csv.component';
import { ProductDetailComponent } from 'src/app/components/product-detail/product-detail.component';
@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss']
})
export class ItemsPage implements OnInit {

  constructor(
    private oauthService: OAuthService,
    private modalController: ModalController,
    private queryResourceservice: QueryResourceService,
    private commandResource: CommandResourceService,
    private popoverController: PopoverController,
    private file: File,
    private documentViewer: DocumentViewer,
    private fileTransfer: FileTransfer,
    private fileOpener: FileOpener,
    private loadingController: LoadingController
  ) { }
  products: Product[] = [];
  accending = true;

  loading: HTMLIonLoadingElement;

  sort() {
    this.accending = !this.accending;
  }

  async createLoader() {

    this.loading = await this.loadingController.create({
      spinner: 'circles',
      translucent: true,
      cssClass: 'loading'
    });
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: AddItemsPage
    });
    await modal.present();
    await modal.onDidDismiss()
      .then(value => {
        console.log(value.data);
        if (value.data === true) {
          this.getproducts();
        }
      })
  }

  async createItemFromCSVModal() {
    const modal = await this.modalController.create({
      component: AddItemFromCSVComponent
    });
    await modal.present();
    await modal.onDidDismiss();
  }

  async showDetails(product: Product) {
    const modal = await this.modalController.create({
      component: ProductDetailComponent,
      componentProps: { product: product }
    });
    await modal.present();
    await modal.onDidDismiss();

  }

  async editProductModal(product: Product) {
    console.log(
      ' editProductModal method working with product id =' + product.id
    );
    const modal = await this.modalController.create({
      component: EditProductModalComponent,
      componentProps: { id: product.id }
    });

    modal.onDidDismiss().then((value) => {
      console.log(value.data);
      if (value.data === true) {
        this.getproducts();
      }
    });

    await modal.present();
  }

  getproducts() {
    this.oauthService.loadUserProfile().then((user: any) => {
      this.createLoader()
        .then(() => {
          this.loading.present();
          this.queryResourceservice.findAllProductUsingGET({
            storeId: user.preferred_username
          }).subscribe(
            result => {
              console.log('-----', result);
              this.products = result;
              this.loading.dismiss();
            },
            err => {
              console.log('error getting products');
              this.loading.dismiss();
            }
          );
        });
    });
  }
  
  ngOnInit() {
    this.getproducts();
  }

  delete(product: Product) {
    console.log('Deleting')
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
      const fileName = 'items.pdf';
      this.file.createFile(this.file.externalCacheDirectory, 'items.pdf', true).then(() => {
        console.log('file created' + blob);

        this.file.writeFile(this.file.externalCacheDirectory, 'items.pdf', blob, { replace: true }).then(
          (value) => {
            console.log('file writed' + value);
            this.fileOpener.showOpenWithDialog(this.file.externalCacheDirectory + 'items.pdf', result.contentType).then(() => console.log('File is opened'))
              .catch(e => console.log('Error opening file', e));
            // this.documentViewer.viewDocument(this.file.externalCacheDirectory + 'items.pdf', 'application/pdf',
            // {print: {enabled: true}, openWith: {enabled: true}});
          });
      });
    });
  }
}
