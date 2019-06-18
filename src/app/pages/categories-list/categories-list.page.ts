import { UserRatingDTO } from './../../api/models/user-rating-dto';

import { QueryResourceService } from 'src/app/api/services';
import { CategoryDTO } from './../../api/models/category-dto';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/api/models';
import { LoadingController } from '@ionic/angular';
import { OAuthService } from 'angular-oauth2-oidc';
import { UserService } from 'src/app/services/user.service';

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
    private loadingController: LoadingController,
    private oathService:OAuthService,
    private userService : UserService
  ) { }

  async createLoader() {

    this.loading = await this.loadingController.create({
      spinner: 'circles',
      translucent: true,
      cssClass: 'loading'
    });
  }
  userData: any;
  ngOnInit() {
   this.userService.getCurrentUser(false).then(user=>{
    this.userData=user;
    console.log('userData is ',this.userData);
    console.log('userData is ',user);
    this.createLoader()
    .then(()=>{
      this.loading.present();
      this.queryResourceService.findAllCategoriesUsingGET(this.userData.preferred_username)
      .subscribe(result => {
        this.loading.dismiss();
        console.log(result);
        this.categoriesList = result;
      },
      err => {
        this.loading.dismiss();
      });
    });
  });
  }

}
