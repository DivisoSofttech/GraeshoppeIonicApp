import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import {AddCategoriesPage} from '../add-categories/add-categories.page'

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

  constructor(private modalController:ModalController) { }

  ngOnInit() {
  }

  
  async presentModal() {
    const modal = await this.modalController.create({
      component: AddCategoriesPage,
    });
    return await modal.present();
  }
}
