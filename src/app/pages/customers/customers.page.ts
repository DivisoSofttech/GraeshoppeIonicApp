import {
  DocumentViewer,
  DocumentViewerOptions
} from '@ionic-native/document-viewer/ngx';
import { Customer } from './../../api/models/customer';
import { Component, OnInit, Input } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';
import { File } from '@ionic-native/file/ngx';
import {AddCustomerPage} from '../add-customer/add-customer.page';
import { QueryResourceService, CommandResourceService } from 'src/app/api/services';
import { PageOfCustomer } from 'src/app/api/models';
import { EditCustomerComponent } from 'src/app/components/edit-customer/edit-customer.component';
import { forEach } from '@angular/router/src/utils/collection';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';


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
    private modalController: ModalController,
    private queryResource: QueryResourceService,
    private commandResourceService: CommandResourceService,
    private documentViewer: DocumentViewer,private iab: InAppBrowser,private platform: Platform, private file: File,
    private fileTransfer: FileTransfer) { }
  @Input()
  asModal = false;
  customers: Customer[];
  selectedCustomer: Customer;
  fileurl;

  searchTerm = '';
  params: QueryResourceService.FindAllCustomersUsingGETParams = {
    searchTerm: undefined
  };

  ngOnInit() {
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
    this.queryResource
      .findAllCustomersWithoutSearchUsingGET({})
      .subscribe(result => {
        this.customers = result.content;
        //     this.customers.forEach(c => {
        //       console.log('ddddddddddd*ddddddddddddd',c.contact.mobileNumber);
        // });
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
  downloadPDF() {
    console.log('downloading is working');
    this.queryResource.exportCustomersUsingGET().subscribe(result => {
      const byteCharacters = atob(result.pdf);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: result.contentType });
      console.log('blob is' + blob);
      this.file.createFile(this.file.externalCacheDirectory, 'customer.pdf', true).then(() => {
        console.log('file created' + blob);

        this.file.writeFile(this.file.externalCacheDirectory, 'customer.pdf', blob, {replace: true}).then(
          (value) => {
            console.log('file writed' + value);

            this.documentViewer.viewDocument(this.file.externalCacheDirectory + 'customer.pdf', 'application/pdf',
            {print: {enabled: true}, openWith: {enabled: true}});


        });
      });
    });

}





}
