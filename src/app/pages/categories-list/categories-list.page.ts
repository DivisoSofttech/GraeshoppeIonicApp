import { QueryResourceService } from 'src/app/api/services';
import { CategoryDTO } from './../../api/models/category-dto';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/api/models';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.page.html',
  styleUrls: ['./categories-list.page.scss'],
})
export class CategoriesListPage implements OnInit {
  categoriesList: CategoryDTO[] = [];

  loading: HTMLIonLoadingElement;

  constructor(
    private queryResourceService: QueryResourceService,
    private loadingController: LoadingController
  ) { }

  async createLoader() {

    this.loading = await this.loadingController.create({
      spinner: 'circles',
      translucent: true,
      cssClass: 'loading'
    });
  }

  ngOnInit() {
    this.createLoader()
    .then(()=> {
      this.loading.present();
      this.queryResourceService.findAllCategoriesUsingGET({})
      .subscribe(result => {
        this.loading.dismiss();
        this.categoriesList = result;
      },
      err => {
        this.loading.dismiss();
      });
    })

  }

}
