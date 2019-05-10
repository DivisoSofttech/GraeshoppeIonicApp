import { LoadingController } from '@ionic/angular';
import { Injectable } from '@angular/core';


export let loading: HTMLIonLoadingElement;

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor(private loadingController: LoadingController) { }

  async presentLoading() {
    loading = await this.loadingController.create({
      spinner: "dots"
    });

    await loading.present();

    const { role, data } = await loading.onDidDismiss();

    console.log('Loading dismissed!');
    return loading;
  };

}