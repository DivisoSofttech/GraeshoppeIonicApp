import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ItemsPage } from '../items/items.page';


@Component({
  selector: 'app-stock-management',
  templateUrl: './stock-management.page.html',
  styleUrls: ['./stock-management.page.scss'],
})
export class StockManagementPage implements OnInit {
  public searchTerm: any;
  public items: any = [ { title: 'one' },
  { title: 'two' },
  { title: 'three' },
  { title: 'four' },
  { title: 'five' },
  { title: 'six' }];


  constructor(private  modalController: ModalController) { }

  ngOnInit() {
  }
  filterItems(searchTerm) {
    return this.items.filter(item => {
      return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: ItemsPage,
      componentProps: {asModal: true}
    });
    await modal.present();
    const {data} = await modal.onDidDismiss();
    console.log(data.selectedProduct);
  }

}
