import { Platform, ToastController, NavController, MenuController } from '@ionic/angular';
import { Component } from '@angular/core';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthConfig } from 'angular-oauth2-oidc/auth.config';
import { JwksValidationHandler, OAuthService } from 'angular-oauth2-oidc';


export const authConfig: AuthConfig = {
  issuer: 'http://35.196.86.249:8080/auth/realms/graeshoppe',
  redirectUri: window.location.origin,
  clientId: 'account',
  scope: 'openid profile email',
  dummyClientSecret: '29a095bc-9ced-480b-a719-4e70ce7dcc49',
  tokenEndpoint: 'http://35.196.86.249:8080/auth/realms/graeshoppe/protocol/openid-connect/token',
  userinfoEndpoint: 'http://35.196.86.249:8080/auth/realms/graeshoppe/protocol/openid-connect/userinfo',
  oidc: false,
  requireHttps: false


};


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: 'analytics'
    },
    {
      title: 'Sale',
      url: '/sale',
      icon: 'cart'
    },
    {
      title: 'Orders',
      url: '/orders',
      icon: 'pricetags'
    },

    {
      title: 'Stock',
      children: [
        {
          title: 'Items',
          url: '/items',
          icon: 'ios-list'
        },
        {
          title: 'Categories',
          url: '/categories',
          icon: 'copy'
        },
        {
          title: 'UOM',
          url: '/uom',
          icon: 'document'
        },
        {
          title: 'Manage Stock',
          url: '/stock-management',
          icon: 'cube'
        }
      ]
    },
    {
      title: 'Customers',
      url: '/customers',
      icon: 'contacts'
    },
    {
      title: 'Receipts',
      url: '/receipts',
      icon: 'copy'
    },
    {

      title: 'Reports',
      url: '/reports',
      icon: 'filing'

    },
    {
      title: 'Settings',
      url: '/settings',
      icon: 'settings'
    },
    {
      title: 'Maintenance',
      url: '/maintenance',
      icon: 'hammer'
    },
    {
      title: 'About Us',
      url: '/about-us',
      icon: 'business'
    },
    {
      title: 'Help Center',
      url: '/help-center',
      icon: 'help'
    },
    {
      title: 'Logout',
      url: '/',
      icon: 'log-out'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private oauthService: OAuthService,
    private toastController: ToastController,
    private navCtrl: NavController,
    private menuCtrl: MenuController
  ) {
    this.initializeApp();
    this.configureOAuth();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.statusBar.backgroundColorByHexString('#f25454');
      this.splashScreen.hide();
    });
  }

  logout() {
    console.log('Logout clicked');
    this.oauthService.logOut();
    this.presentToastLogout();
    this.navCtrl.navigateRoot('/landing');
  }

  async presentToastLogout() {
    const toast = await this.toastController.create({
      message: 'You\'ve been successfully logout',
      duration: 2000,
      position: 'bottom',
      cssClass: 'toast'
    });
    toast.present();
  }

  navigateToProfile() {
    this.navCtrl.navigateForward('/profile');
    this.menuCtrl.close();
  }

  configureOAuth(): any {
    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    // Load Discovery Document and then try to login the user
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }
}
