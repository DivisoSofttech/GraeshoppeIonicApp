import { Component, OnInit, ViewChild } from '@angular/core';
import { QueryResourceService } from 'src/app/api/services';
import { Order, OrderLine } from 'src/app/api/models';
import { ModalController, IonSlides, LoadingController } from '@ionic/angular';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {

  orders: Order[] = [];

  currentPage = 'all';

  @ViewChild('slides') slides: IonSlides;

  selectedFilter: string = 'all';

  loading: HTMLIonLoadingElement;

  showView = false;

  constructor(
    private queryResourceService: QueryResourceService,
    private modalController: ModalController,
    private oauthService: OAuthService,
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
    .then(() => {
        this.loading.present();
        this.oauthService.loadUserProfile()
        .then((userData: any) => {
         this.queryResourceService.findOrderLineByStoreIdUsingGET('whitesand')
         .subscribe(data => {
           console.log(data.content);
           this.orders = data.content;
           this.loading.dismiss();
           this.showView = true;
         } , err => {
           this.loading.dismiss();
         });
        });    
    })
  }

  slideChange() {
    let index: any;
    this.slides.getActiveIndex().then(num => {
      index = num;
      if (index === 0) {
        this.currentPage = 'all';
      } else if (index === 1) {
        this.currentPage = 'delivery';
      } else if (index === 2) {
        this.currentPage = 'collections';
      }
    });
  }

  segmentChange(ev) {
    if (ev.detail.value === 'all') {
      this.slides.slideTo(0);
    } else if (ev.detail.value === 'delivery') {
      this.slides.slideTo(1);
    } else if (ev.detail.value === 'collections') {
      this.slides.slideTo(2);
    }
  }

}
