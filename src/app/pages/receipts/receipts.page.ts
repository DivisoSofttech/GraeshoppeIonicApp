import { OAuthService } from 'angular-oauth2-oidc';
import { SaleService } from './../../services/sale.service';
import { LoadingService, loading } from './../../services/loading.service';
import { SaleAggregate } from './../../api/models/sale-aggregate';
import { QueryResourceService } from 'src/app/api/services';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-receipts',
  templateUrl: './receipts.page.html',
  styleUrls: ['./receipts.page.scss'],
})
export class ReceiptsPage implements OnInit {

   dateSet = new Set<string>();
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

 
   params: QueryResourceService.FindAllSaleAggregatesUsingGETParams={
    page:0,
    size:10,
    storeId: null
    
  };
  maximumPage:number;
  test: boolean = false;
  id: String = '1-1001';
  sales: SaleAggregate[];

  constructor(
    private oauthService: OAuthService,
    private navController: NavController,
    private queryResourceService: QueryResourceService,
    private loadingService:LoadingService,
    private saleService: SaleService) { }

    addDate(date: string)
    {
        this.dateSet.add(date);
    }

    checkDate(date: string): boolean
    {
     return this.dateSet.has(date);
    }


  ngOnInit() {
 
    this.oauthService.loadUserProfile().then((user: any) => {
      this.params.storeId= user.preferred_username
    });
    this.queryResourceService.findAllSaleAggregatesUsingGET(this.params)
      .subscribe(response => {
        console.log("Total Length   ******************  : "+response.content.length);
        this.sales = response.content;
        this.maximumPage= response.totalPages;

      });
  }


  navigateToDetails(currentSale: SaleAggregate) {

    this.saleService.setCurrentSale(currentSale);
    this.navController.navigateForward('/receipts/' + this.id);
  }
  loadUsers(infiniteScroll?)
  {
    console.log("infinite scroll running");

    this.queryResourceService.findAllSaleAggregatesUsingGET(this.params)
      .subscribe(response => {
        console.log("Total Length   ******************  : "+response.content.length);
        console.table(+response.content);
        this.sales = this.sales.concat(response.content);



      });
  }




  loadMore(infiniteScroll) {
    console.log("Load more");
    this.params.page=this.params.page+1;
    this.loadUsers(infiniteScroll);

    if (this.params.page === this.maximumPage) {
      console.log("maximum reached");
      this.infiniteScroll.disabled=true;
      this.infiniteScroll.complete();
    }
  }

}
