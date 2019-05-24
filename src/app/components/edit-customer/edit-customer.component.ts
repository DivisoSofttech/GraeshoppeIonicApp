import { ContactDTO } from './../../api/models/contact-dto';
import { Contact } from './../../api/models/contact';
import { CommandResourceService } from 'src/app/api/services';
import { ModalController, ToastController } from '@ionic/angular';
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
  constructor(private modalController: ModalController,
    private toast: ToastController,
    private commandResourceService: CommandResourceService) { }

  ngOnInit() {}
  update(customer: Customer) {
    const tempCustomer: CustomerDTO = {};
    tempCustomer.id = customer.id;
    tempCustomer.name = customer.name;
    tempCustomer.contactId = customer.contact.id;
    const tempContact: ContactDTO = {};
    tempContact.id = customer.contact.id;
    tempContact.mobileNumber = customer.contact.mobileNumber;
    this.commandResourceService.updateCustomerUsingPUT(tempCustomer).subscribe(succ => {
    this.commandResourceService.updateContactUsingPUT(tempContact).subscribe(success => {
      this.showToast('Edited Successfully');
      this.dismiss();
    }, err => {  this.showToast('Some fields could not be updated'); });
  }, err => {this.showToast('Error updating customer'); });
  }
  dismiss() {
    this.modalController.dismiss();
  }

  async showToast(message) {
   const tst = await this.toast.create({
      message,
      duration: 2000,
      cssClass: 'toast'
    });
    await tst.present();
  }
}
