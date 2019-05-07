import { Contact } from './../../api/models/contact';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {CustomerAggregator} from '../../api/models/customer-aggregator';
import { AccountResourceService, CommandResourceService, QueryResourceService } from 'src/app/api/services';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.page.html',
  styleUrls: ['./add-customer.page.scss'],
})
export class AddCustomerPage implements OnInit {

  constructor(
    private modalController: ModalController,
    private customerCommandResourceService: CommandResourceService,
    private accountService: AccountResourceService,
    private queryResourceService:QueryResourceService
  ) { }

  customer: CustomerAggregator = {};
  name: string;
  phone: string;

  dismiss(id : number) {
    this.queryResourceService.findAllCustomersWithoutSearchUsingGET({}).subscribe(result => {
     let customers = result.content;
     this.modalController.dismiss({customers : customers});
  },
  err=>{console.log('error finding customer ',err)});

  }

  ngOnInit() {
  }

  save() {
    // this.accountService.getAccountUsingGET("admin").subscribe(res=>console.log(res));
    console.log('In save method');
   this.customer.name = this.name;
   this.customer.mobileNumber = this.phone;
   console.log('Customer is ' + this.customer.name);
   this.customerCommandResourceService.createCustomerUsingPOST(this.customer).subscribe(customer => {
      console.log('Customer is ' + customer);
      this.customer=customer;
      this.dismiss(customer.id);
    },
      err => console.log('Error is ' + err),
      () => console.log('Observer got a complete notification')
    );
  }
}
