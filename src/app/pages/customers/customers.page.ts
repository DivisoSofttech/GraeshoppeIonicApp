import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {AddCustomerPage} from '../add-customer/add-customer.page'
import { QueryResourceService } from 'src/app/api/services';
import { PageOfCustomer } from 'src/app/api/models';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})
export class CustomersPage implements OnInit {

  customers:PageOfCustomer;
  constructor(private modalController:ModalController,private queryResource:QueryResourceService) { }

  ngOnInit() {
  }

  searchTerm:string='';
  params:QueryResourceService.FindAllCustomersUsingGETParams={searchTerm:undefined};
  onSearch(){
    console.log("Search Term is "+this.searchTerm);
    this.params.searchTerm=this.searchTerm;
    if(this.searchTerm===''){
      this.params.searchTerm='a';
    }
    this.queryResource.findAllCustomersUsingGET(this.params).subscribe(
      result=>{
      console.log("result is "+result);
      this.customers=result;
    });
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: AddCustomerPage,
    });
    return await modal.present();
  }
}
