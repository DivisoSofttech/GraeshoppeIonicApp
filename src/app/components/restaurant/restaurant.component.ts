import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { LoadingService } from 'src/app/services/loading.service';
import { OAuthService } from 'angular-oauth2-oidc';
import { QueryResourceService } from 'src/app/api/services';
import { Store, StoreBundleDTO } from 'src/app/api/models';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss'],
})
export class RestaurantComponent implements OnInit {

  storeModel: {
    keycloak?: Object,
    store?: StoreBundleDTO
  } = {};
  
  options = [{
    name:'Edit Restaurant',
    url:'update-store'
  },
  {
    name:'Printer',
    url:'printer'
  },
  {
    name:'Delete Account',
    url:''
  }]

  constructor(
    private loadingService: LoadingService,
    private navctrl: NavController,
    private oauthService: OAuthService,
    private queryService: QueryResourceService,
  ) { }

  ngOnInit() {
    this.getStoreDetails();
  }


  getStoreDetails() {
    this.loadingService.presentLoading()
    .then(loader => {
      loader.present();
      if (this.oauthService.hasValidAccessToken()) {
        this.oauthService.loadUserProfile().then((data: any) => {
          this.storeModel.keycloak = data;
          this.queryService
            .getStoreBundleUsingGET({ regNo: data.preferred_username })
            .subscribe((store: StoreBundleDTO) => {
              console.log('received store', data);
              this.storeModel.store = store;
              loader.dismiss();
            },
            err=> {
              loader.dismiss();
            });
        });
      }  
    })
  }

  openSetting(url) {
    this.navctrl.navigateForward(url);
  }

}
