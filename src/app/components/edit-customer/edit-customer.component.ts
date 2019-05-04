import { Contact } from './../../api/models/contact';
import { CommandResourceService } from 'src/app/api/services';
import { ModalController } from '@ionic/angular';
import { Customer } from './../../api/models/customer';
import { Component, OnInit, Input } from '@angular/core';
import { CustomerAggregator } from 'src/app/api/models/customer-aggregator';
import { CustomerDTO } from 'src/app/api/models';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss'],
})
export class EditCustomerComponent implements OnInit {
  @Input()
 customer: Customer = {};
  constructor(private modalController:ModalController,
    private commandResourceService : CommandResourceService) { }

  ngOnInit() {}
  update(customer : Customer)
  {
    // console.log('customer update working');
    // let tempCustomer: CustomerDTO = {};
    // tempCustomer.id=customer.id;
    // tempCustomer.name=customer.name;
    // tempCustomer.contact.=customer.contact=customer.id;

    // this.commandResourceService.updateCustomerUsingPUT(tempCustomer).subscribe(succ=>{console.log('succes updating customer ',succ);
  //   this.dismiss();
  // },err=>{console.log('error updating customer ',err)});
  this.dismiss();
  }
  dismiss()
  {
    this.modalController.dismiss();
  }
}
