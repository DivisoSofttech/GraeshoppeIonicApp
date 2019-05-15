import { ElementRef } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { NavController, ToastController } from '@ionic/angular';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string;
  password: string;
  constructor(private oauthService: OAuthService, private navCtrl: NavController, private toastController: ToastController) { }

  ngOnInit() {
    if (this.oauthService.hasValidAccessToken()) {
      this.navCtrl.navigateRoot('/sale');
    }
  }
  login() {
    console.log('in login' + this.username + ' password is ' + this.password);
    this.oauthService.fetchTokenUsingPasswordFlowAndLoadUserProfile(this.username, this.password, new HttpHeaders()).then(() => {
      const claims = this.oauthService.getIdentityClaims();
      if (claims) { console.log(claims); }
      if (this.oauthService.hasValidAccessToken()) {
        this.presentToast('Logged in successfully');
        this.navCtrl.navigateRoot('/sale');
      }
    }).catch((err: HttpErrorResponse) => {
      this.presentToast(err.error.error_description);
    });
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      cssClass: 'toast'
    });
    toast.present();
  }


}
