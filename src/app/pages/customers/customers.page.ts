import { Customer } from './../../api/models/customer';
import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {AddCustomerPage} from '../add-customer/add-customer.page';
import { QueryResourceService, CommandResourceService } from 'src/app/api/services';
import { PageOfCustomer } from 'src/app/api/models';
import { EditCustomerComponent } from 'src/app/components/edit-customer/edit-customer.component';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})
export class CustomersPage implements OnInit {
  constructor(private modalController: ModalController, private queryResource: QueryResourceService,
    private commandResourceService: CommandResourceService) { }
  @Input()
  asModal = false;
  customers: Customer[];
  selectedCustomer: Customer;

  searchTerm = '';
  params: QueryResourceService.FindAllCustomersUsingGETParams = {searchTerm: undefined};

  ngOnInit() {
    this.queryResource.findAllCustomersWithoutSearchUsingGET({}).subscribe(result => {
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
      this.queryResource.findAllCustomersWithoutSearchUsingGET({}).subscribe(result => {
        this.customers = result.content;
    });
    }
    this.queryResource.findAllCustomersUsingGET(this.params).subscribe(
      result => {
      console.log('result is ' + result);
      this.customers = result.content;
    });
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: AddCustomerPage,
    });
     await modal.present();
     const {data} = await modal.onDidDismiss();
     this.customers.push(data.customer);

  }

  dismiss(force: boolean) {
    if (force) {
      this.modalController.dismiss();
    } else {
      this.modalController.dismiss({'selectedCustomer': this.selectedCustomer});
    }
  }

  selectCustomer(cust: Customer) {
    this.selectedCustomer = cust;
    if (this.asModal) {
      this.dismiss(false);
    }
  }
  editCustomer(customer : Customer)
  {
    this.presentEditCustomerModal(customer);
    console.log('dddddddddddddddddddddddd'+customer.contact.mobileNumber);
  }
  async presentEditCustomerModal(customer:Customer)
  {
    const modal = await this.modalController.create({
      component: EditCustomerComponent,
      componentProps : {customer : customer}
    });
      await modal.present();
  }
  deleteCustomer(customer : Customer)
  {
    console.log('delete request for an customer with id'+customer.id);
    this.commandResourceService.deleteCustomerUsingDELETE(customer.id).subscribe(succ=>{console.log('sucess deleting customer ',succ);
    this.customers.splice(this.customers.indexOf(customer),1)},
    err=>{console.log('err deleting an customer ',err)});
  }
  downloadPDF() {
    this.queryResource.exportCustomersUsingGET().subscribe(res => {
      console.log(res);
    })
  }
}
