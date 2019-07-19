import { NavController, ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { SettingsModel, Settings } from './settings';
import { RestaurantComponent } from 'src/app/components/restaurant/restaurant.component';
import { OAuthService } from 'angular-oauth2-oidc';
import { QueryResourceService } from 'src/app/api/services';
import { StoreBundleDTO, Store } from 'src/app/api/models';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  settingsModel: SettingsModel = {
    settings: [
      {
        name: "Printer",
        iconName: "print",
        isSelected: false,
        url: '/printer'
      },
      {
        name: "General",
        iconName: "settings",
        isSelected: false,
        url: '/restaurant'
      }
    ]
  };

  constructor(private navctrl: NavController) { }

  ngOnInit() {
  }


  hideSettings(index: number) {
    this.settingsModel.settings[index].isSelected = false;
  }

  openSetting(cmp: Settings) {
    this.navctrl.navigateForward(cmp.url)
  }




}
