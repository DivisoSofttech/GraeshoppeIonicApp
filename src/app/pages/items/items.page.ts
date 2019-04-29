import { Product } from './../../api/models/product';
import { QueryResourceService } from 'src/app/api/services';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import {AddItemsPage} from '../add-items/add-items.page'

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {

  products: Product[] = [];

  constructor(
    private modalController: ModalController,
    private queryResourceservice: QueryResourceService
  ) { }

  async presentModal() {
    const modal = await this.modalController.create({
      component: AddItemsPage,
    });
    return await modal.present();
  }

  ngOnInit() {
    this.queryResourceservice.findAllCategoriesUsingGET({})
    .subscribe(result => {

      for (const category of result) {
        console.log(category.id);
        this.queryResourceservice.findProductByCategoryIdUsingGET({categoryId: category.id})
        .subscribe(res => {


          console.log('product' , res.content);
          // res.content.forEach(p => {
          //   this.products.push(p);
          //   console.log('product2' , p);
          // });
          for (const product of res.content) {
            this.products.push(product);
            console.log('product2' , product);
          }
        });
      }

    });

  }

}
