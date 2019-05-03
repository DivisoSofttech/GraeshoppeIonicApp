import { Customer } from './../../api/models/customer';
import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {AddCustomerPage} from '../add-customer/add-customer.page';
import { QueryResourceService } from 'src/app/api/services';
import { PageOfCustomer } from 'src/app/api/models';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})
export class CustomersPage implements OnInit {
  constructor(private modalController: ModalController, private queryResource: QueryResourceService) { }
  @Input()
  asModal = false;
  customers: Customer[];
  selectedCustomer: Customer;

  searchTerm = '';
  params: QueryResourceService.FindAllCustomersUsingGETParams = {searchTerm: undefined};

  ngOnInit() {
    this.queryResource.findAllCustomersWithoutSearchUsingGET({}).subscribe(result => {
        this.customers = result.content;
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
    return await modal.present();
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

  downloadPDF() {
    this.queryResource.exportCustomersUsingGET().subscribe(res => {
      console.log(res);
    })
  }
}
