import { AddItemsPage } from './../add-items/add-items.page';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ItemsPage } from '../items/items.page';
import { AddStockComponent } from 'src/app/components/add-stock/add-stock.component';
import {
  CommandResourceService,
  QueryResourceService
} from 'src/app/api/services';
import { StockCurrent, ProductDTO } from 'src/app/api/models';
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-stock-management',
  templateUrl: './stock-management.page.html',
  styleUrls: ['./stock-management.page.scss']
})
export class StockManagementPage implements OnInit {
  public progress = 0;
  public pressState = 'released';
  stock: StockCurrent[] = [];
  params: QueryResourceService.GetAllStockCurrentsUsingGETParams;

  protected interval: any;
  selectedProduct: any;
  public searchTerm: any;

  username;

  constructor(
    private oauthService: OAuthService,
    private modalController: ModalController,
    private queryResource: QueryResourceService,
    private file: File,
    private fileOpener: FileOpener,
    private commandResourceService: CommandResourceService
  ) {}

  ngOnInit() {
    this.oauthService.loadUserProfile().then((user: any) => {
      this.username = user.preferred_username;
    this.getAllStocks();
    });
  }

  getAllStocks() {
   
    this.params = {storeId: this.username};
    this.queryResource
      .getAllStockCurrentsUsingGET(this.params)
      .subscribe(result => {
        this.stock = result.content;
      });
  
  }

  async presentModal(item: StockCurrent) {
    const modal = await this.modalController.create({
      component: AddStockComponent,
      componentProps: { stockCurrent: item }
    });
    await modal.present();
    await modal.onDidDismiss().then(() => {
      this.getAllStocks();
    });
  }
  onSearchType(event) {
    console.log('event searchitem' + event.target.value);
    const searchTerm: string = event.target.value;
    if (searchTerm.length > 3) {
      const paramsProductName = { name: searchTerm };
      this.queryResource
      .findAllStockCurrentByProductNameUsingGET({name: searchTerm, storeId: this.username})
      .subscribe(
        result => {
          this.stock = result.content;
        },
        err => {
          console.log('error getting data', err);
        }
      );
    } else if (searchTerm === '') {
      this.getAllStocks();
    }
  }

  doRefresh(event) {
    this.getAllStocks();
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  async presentAddModal() {
    const modal = await this.modalController.create({
      component: AddItemsPage
    });
    await modal.present();
    await modal.onDidDismiss().then(() => {
      this.getAllStocks();
    });
  }

  downloadReport() {
    console.log('downloading is working');
    this.queryResource.exportProductsUsingGET().subscribe(result => {
      const byteCharacters = atob(result.pdf);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: result.contentType });
      console.log('blob is' + blob);
      const fileName = 'items.pdf';
      this.file
        .createFile(this.file.externalCacheDirectory, 'items.pdf', true)
        .then(() => {
          console.log('file created' + blob);

          this.file
            .writeFile(this.file.externalCacheDirectory, 'items.pdf', blob, {
              replace: true
            })
            .then(value => {
              console.log('file writed' + value);
              this.fileOpener
                .showOpenWithDialog(
                  this.file.externalCacheDirectory + 'items.pdf',
                  result.contentType
                )
                .then(() => console.log('File is opened'))
                .catch(e => console.log('Error opening file', e));
              // this.documentViewer.viewDocument(this.file.externalCacheDirectory + 'items.pdf', 'application/pdf',
              // {print: {enabled: true}, openWith: {enabled: true}});
            });
        });
    });
  }
}
