import { OAuthService } from 'angular-oauth2-oidc';
import {
  DocumentViewer,
  DocumentViewerOptions
} from '@ionic-native/document-viewer/ngx';
import { Customer } from './../../api/models/customer';
import { Component, OnInit, Input } from '@angular/core';
import { ModalController, Platform, ToastController } from '@ionic/angular';
import { File } from '@ionic-native/file/ngx';
import {AddCustomerPage} from '../add-customer/add-customer.page';
import { QueryResourceService, CommandResourceService } from 'src/app/api/services';
import { PageOfCustomer } from 'src/app/api/models';
import { EditCustomerComponent } from 'src/app/components/edit-customer/edit-customer.component';
import { forEach } from '@angular/router/src/utils/collection';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';


const options: DocumentViewerOptions = {
  title: 'Customers'
};

@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss']
})
export class CustomersPage implements OnInit {
  constructor(
    private oauthService: OAuthService,
    private modalController: ModalController,
    private queryResource: QueryResourceService,
    private commandResourceService: CommandResourceService,
    private documentViewer: DocumentViewer,private iab: InAppBrowser,private platform: Platform, private file: File,
    private fileTransfer: FileTransfer,private fileOpener: FileOpener,public toastController: ToastController) { }
  @Input()
  asModal = false;
  customers: Customer[];
  selectedCustomer: Customer;
  fileurl;

  searchTerm = '';
  params: QueryResourceService.FindAllCustomersUsingGETParams = {
    searchTerm: undefined,
    storeId: null
  };

  ngOnInit() {
    this.oauthService.loadUserProfile().then((user: any) => {
      this.params.storeId= user.preferred_username
    });
    this.queryResource
      .findAllCustomersWithoutSearchUsingGET({})
      .subscribe(result => {
        this.customers = result.content;
        //     this.customers.forEach(c => {
        //       console.log('ddddddddddd*ddddddddddddd',c.contact.mobileNumber);
        // });
      });
  }
  onSearch() {
    console.log('Search Term is ' + this.searchTerm);
    this.params.searchTerm = this.searchTerm;
    if (this.searchTerm === '') {
      this.queryResource
        .findAllCustomersWithoutSearchUsingGET({})
        .subscribe(result => {
          this.customers = result.content;
        });
    }
    this.queryResource
      .findAllCustomersUsingGET(this.params)
      .subscribe(result => {
        console.log('result is ', result);
        this.customers = result.content;
      });
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: AddCustomerPage
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    this.customers = data.customers;
  }

  dismiss(force: boolean) {
    if (force) {
      this.modalController.dismiss();
    } else {
      this.modalController.dismiss({ selectedCustomer: this.selectedCustomer });
    }
  }

  selectCustomer(cust: Customer) {
    this.selectedCustomer = cust;
    if (this.asModal) {
      this.dismiss(false);
    }
  }
  editCustomer(customer: Customer) {
    this.presentEditCustomerModal(customer);
    console.log('dddddddddddddddddddddddd' + customer.contact.mobileNumber);
  }
  async presentEditCustomerModal(customer: Customer) {
    const modal = await this.modalController.create({
      component: EditCustomerComponent,
      componentProps: { customer: customer }
    });
    await modal.present();
    modal.onDidDismiss().then(() => {
      this.queryResource
      .findAllCustomersWithoutSearchUsingGET({})
      .subscribe(result => {
        this.customers = result.content;
      });
    });
  }
  deleteCustomer(customer: Customer) {
    console.log('delete request for an customer with id' + customer.id);
    this.commandResourceService
      .deleteCustomerUsingDELETE(customer.id)
      .subscribe(
        succ => {
          console.log('sucess deleting customer ', succ);
          this.customers.splice(this.customers.indexOf(customer), 1);
        },
        err => {
          console.log('err deleting an customer ', err);
        }
      );
  }


  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Downloading.'
    });
    toast.present();
  }
  downloadPDF() {
    console.log('download pdf method');

    this.queryResource.exportCustomersUsingGET().subscribe(result => {
      const byteCharacters = atob(result.pdf);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: result.contentType });
      console.log('blob is' + blob);
      this.toastController.dismiss();
      this.file.createFile(this.file.externalCacheDirectory, 'customer.pdf', true).then(() => {
        console.log('file created' + blob);

        this.file.writeFile(this.file.externalCacheDirectory, 'customer.pdf', blob, {replace: true}).then(
          (value) => {
            console.log('file writed' + value);

            this.fileOpener.showOpenWithDialog(this.file.externalCacheDirectory + 'customer.pdf', result.contentType).then(() => console.log('File is opened'))
            .catch(e => console.log('Error opening file', e));



        });
      });
    });

}

doRefresh(event) {
  console.log('Begin async operation');
  this.ngOnInit();
  setTimeout(() => {
    console.log('Async operation has ended');
    event.target.complete();
  }, 2000);
}



}
