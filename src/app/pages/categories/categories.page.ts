import { CategoryDTO } from './../../api/models/category-dto';
import { QueryResourceService } from 'src/app/api/services';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import {AddCategoriesPage} from '../add-categories/add-categories.page'

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

  categories: CategoryDTO[] = [];

  constructor(
    private modalController: ModalController,
    private queryResourceService: QueryResourceService
  ) { }

  ngOnInit() {
    this.queryResourceService.findAllCategoriesUsingGET({})
    .subscribe(result => {
      this.categories = result;
    });
  }

  
  async presentModal() {
    const modal = await this.modalController.create({
      component: AddCategoriesPage,
    });
    return await modal.present();
  }
}
