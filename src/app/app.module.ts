import { Crop } from '@ionic-native/crop/ngx';
import { ItemsPageModule } from './pages/items/items.module';
import { CustomersPageModule } from './pages/customers/customers.module';
import { NgModule } from '@angular/core';
import { BrowserModule, HAMMER_GESTURE_CONFIG} from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { OAuthModule } from 'angular-oauth2-oidc';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SuperTabsModule } from '@ionic-super-tabs/angular';
import { CategoriesListPageModule } from './pages/categories-list/categories-list.module'
import { SalePageModule } from './pages/sale/sale.module'
import { RecentlyUsedPageModule } from './pages/recently-used/recently-used.module';
import { AddCustomerPageModule } from './pages/add-customer/add-customer.module';
import { ApiModule } from './api/api.module';
import { AuthInterceptor } from './pages/security/auth-interceptor';
import { AddCategoriesPageModule } from './pages/add-categories/add-categories.module';
import { AddItemsPageModule } from './pages/add-items/add-items.module';
import { AddUomPageModule } from './pages/add-uom/add-uom.module';
import { ImageCompressService } from 'ng2-image-compress';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { DashboardPageModule } from './pages/dashboard/dashboard.module';
import { ChartsModule } from 'ng2-charts';
import { UserComponent } from './user/user.component';
import { StockManagementPageModule } from './pages/stock-management/stock-management.module';

import { IonicGestureConfig } from './gestures/ionic-gesture-config';
import { DocumentViewer } from '@ionic-native/document-viewer/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { ProductNamePipe } from './components/product-name-pipe';
import { ProductsNamePipe } from './products-name.pipe';



@NgModule({
  declarations: [AppComponent, UserComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    OAuthModule.forRoot(),
    //   OAuthModule.forRoot({
    //     resourceServer: {
    //         allowedUrls: ['http://35.231.213.38:9080/api'],
    //         sendAccessToken: true
    //     }
    // }),
    HttpClientModule,
    SuperTabsModule.forRoot(),
    CategoriesListPageModule,
    RecentlyUsedPageModule,
    SalePageModule,
    ItemsPageModule,
    StockManagementPageModule,
    AddCustomerPageModule,
    CustomersPageModule,
    AddCategoriesPageModule,
    AddItemsPageModule,
    AddUomPageModule,
    DashboardPageModule,
    ChartsModule,
    ApiModule.forRoot({rootUrl: 'http://34.73.191.107:9080'})


  ],
  providers: [
    StatusBar,
    SplashScreen,
    Crop,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true

    },{
      provide: HAMMER_GESTURE_CONFIG,
      useClass: IonicGestureConfig
  },
  ImageCompressService,
  BarcodeScanner,
  DocumentViewer,
  InAppBrowser,
  File,
  FileTransfer,
  FileOpener
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
