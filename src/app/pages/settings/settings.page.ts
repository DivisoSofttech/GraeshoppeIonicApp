import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { SettingsModel } from './settings';

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
        isSelected: false
      },
      {
        name: "General",
        iconName: "settings",
        isSelected: false,
        subSettings: [
          {
            name: "Update Store Info",
            url: "/update-store",
            iconName: "create"
          }
        ]
      }
    ]
  };

  constructor(private navctrl: NavController) { }

  ngOnInit() {
    console.log(this.settingsModel);
  }

  clickSettings(index: number) {
    this.settingsModel.settings[index].isSelected = !this.settingsModel.settings[index].isSelected;
    if (!this.settingsModel.settings[index].subSettings) {
      (this.settingsModel.settings[index].url) ? this.navctrl.navigateForward(this.settingsModel.settings[index].url) : this.navctrl.navigateForward("/settings");
    }

  }

  hideSettings(index: number) {
    this.settingsModel.settings[index].isSelected = false;
  }


}
