import { AddLocationComponent } from './../../components/add-location/add-location.component';
import { LocationService } from './../../services/location.service';
import { TypeDTO } from './../../api/models/type-dto';
import { DeliveryInfoDTO } from './../../api/models/delivery-info-dto';
import { HttpErrorResponse } from '@angular/common/http';
import { DateService } from './../../date/date.service';
import { RESIZE_OPTIONS } from './../../image-resize-options';
import { ImageCompressService } from 'ng2-image-compress';
import { NavController,ToastController,ModalController } from '@ionic/angular';
import { OAuthService } from 'angular-oauth2-oidc';
import { QueryResourceService,CommandResourceService } from 'src/app/api/services';
import { Component, OnInit } from '@angular/core';
import { StoreBundleDTO, StoreDTO } from 'src/app/api/models';

@Component({
  selector: 'app-update-store',
  templateUrl: './update-store.page.html',
  styleUrls: ['./update-store.page.scss']
})
export class UpdateStorePage implements OnInit {

  store: StoreDTO = {};
  deliveryInfos: DeliveryInfoDTO[] = [];
  types: TypeDTO[] = [];
  isAddingNewDeliveryInfo = false;
  newDeliveryInfo: DeliveryInfoDTO = {};
  isDeliveryInfosShowing = false;

  // private storeName: string;
  storeRegNo: string;
  storeEmail: string;

  fileToUpload: File;
  imageToDisplay: string;
  
  constructor(
    private queryService: QueryResourceService,
    private oauthService: OAuthService,
    private commandservice: CommandResourceService,
    private navcntrl: NavController,
    private dateService: DateService,
    public toastController: ToastController,
    private modalController: ModalController,
    private locationService: LocationService
  ) {}

  ngOnInit() {
    /*     this.queryService.findStoreByRegNoUsingGET({regNo:}) */
    let username: string;
    if (this.oauthService.hasValidAccessToken()) {
      this.oauthService.loadUserProfile().then((data: any) => {
        // this.storeName = data.preferred_username;
        this.storeEmail = data.email;
        username = data.preferred_username;
        this.storeRegNo = username;
        console.log('store-user', data);
        this.queryService
          .getStoreBundleUsingGET({ regNo: this.storeRegNo })
          .subscribe((data: StoreBundleDTO) => {
            console.log('received store', data);
            this.store = data.store;
            if (data.deliveryInfos) {
              this.deliveryInfos = data.deliveryInfos;
            }
            this.types = data.types;
          });
      });
      /*       this.queryService.findStoreByRegNoUsingGET({ regNo: username }).subscribe(
              data => {
                console.log(data.content);TypeDTO
                if((data.content.length>0)){
                  this.store = data.content[0];
                }

              }
            ); */
    }
  }

  save() {
    this.store.openingTime = this.dateService.convertToInstantFromHourTime(
      this.store.openingTime
    );
    this.store.closingTime = this.dateService.convertToInstantFromHourTime(
      this.store.closingTime
    );

    console.log(
      'converted Time',
      this.store.openingTime,
      this.store.closingTime
    );
    this.store.regNo = this.storeRegNo;
    this.store.email = this.storeEmail;
    let ids: number[];
    this.types.forEach(element => {
      this.commandservice.createTypeUsingPOST(element).subscribe(
        res => {
          ids.push(res.id);
        }
      )
    });
    ids.forEach(element => {
      this.commandservice.createDeliveryInfoUsingPOST({typeId: element, storeId: this.store.id})
    });
    // this.store.name = this.storeName;
    if (this.store.id) {
      this.commandservice.updateStoreUsingPUT(this.store).subscribe(
        data => {
          console.log('store updated', data);
          this.presentToast(
            'Your store information has been successfully saved'
          );
          this.navcntrl.navigateBack('/settings');
        },
        (err: HttpErrorResponse) => {
          console.log('store updation failed', err);
          this.presentToast(
            'Your store information could not be saved, ' + err.message
          );
        }
      );
    } else {
      this.commandservice.createStoreUsingPOST(this.store).subscribe(
        data => {
          console.log('store created', data);
          this.presentToast(
            'Your store information has been successfully updated'
          );
          this.navcntrl.navigateBack('/settings');
        },
        (error: HttpErrorResponse) => {
          this.presentToast(
            'Your settings could not be updated, ' + error.message
          );
          console.log('store creation failed', error);
        }
      );
    }
  }
  onSelectFile(event) {
    this.fileToUpload = event.target.files.item(0);

    const freader = new FileReader();

    freader.onload = (ev: any) => {
      this.store.image = ev.target.result;
      this.store.imageContentType = this.fileToUpload.type;
    };
    const images = [];
    ImageCompressService.filesArrayToCompressedImageSourceEx(
      [this.fileToUpload],
      RESIZE_OPTIONS
    ).then(observableImages => {
      observableImages.subscribe(
        image => {
          images.push(image);
        },
        error => {
          console.log('Error while converting');
        },
        () => {
          // converts the encoded compressed file to blob for file reader to read
          /*           fetch(images.pop().compressedImage.imageDataUrl).then(data => {
                      data.blob().then(blob => {
                        console.log("blob", blob);
                        freader.readAsDataURL(blob);
                      });
                    }); */

          this.imageToDisplay = images.pop().compressedImage.imageDataUrl;
          this.store.imageContentType = this.imageToDisplay
            .split(',')[0]
            .split(';')[0]
            .split(':')[1];
          this.store.image = this.imageToDisplay.split(',')[1];
          console.log(
            'image\nimageConverted',
            this.store.image,
            this.store.imageContentType
          );
        }
      );
    });
  }

  triggerUpload(ev: Event) {
    document.getElementById('logo').click();
  }
  async presentToast(messageToShow: string) {
    const toast = await this.toastController.create({
      message: messageToShow,
      duration: 2000
    });
    toast.present();
  }

  getType(index: number) {
    return this.types[index].name;
  }
  addNewDeliveryInfo() {
    this.isAddingNewDeliveryInfo = true;
  }
  hideDeliveryInfos() {
    this.isDeliveryInfosShowing = false;
  }
  showDeliveryInfos() {
    this.isDeliveryInfosShowing = true;
  }
  closeNewDeliveryInfo() {
    this.isAddingNewDeliveryInfo = false;
  }
  saveNewDeliveryInfo() {
    this.newDeliveryInfo.storeId = this.store.id;
    this.commandservice
      .createDeliveryInfoUsingPOST(this.newDeliveryInfo)
      .subscribe(
        response => {
          console.log('delvery info created', response);
          this.deliveryInfos.push(response);
          this.presentToast('Your delivery info successfully saved');
          this.isAddingNewDeliveryInfo = false;
          this.newDeliveryInfo = {};
        },
        (err: HttpErrorResponse) => {
          console.log('delivery info creation failed', err);
          this.presentToast(
            'Your delivery info could not be saved, ' + err.message
          );
        }
      );
  }

  updateDeliveryInfo(index: number) {
    this.commandservice
      .updateDeliveryInfoUsingPUT(this.deliveryInfos[index])
      .subscribe(
        response => {
          console.log('delvery info updated', response);
          this.presentToast('Your delivery info successfully updated');
        },
        (err: HttpErrorResponse) => {
          console.log('delivery info updation failed', err);
          this.presentToast(
            'Your delivery info could not be updated, ' + err.message
          );
        }
      );
  }

  deleteDeliveryInfo(index: number) {
    this.commandservice
      .deleteDeliveryInfoUsingDELETE(this.deliveryInfos[index].id)
      .subscribe(
        response => {
          console.log('delvery info deleted', response);
          this.deliveryInfos.splice(index, 0);
          this.presentToast('Your delivery info successfully deleted');
        },
        (err: HttpErrorResponse) => {
          console.log('delivery info deleted', err);
          this.presentToast(
            'Your delivery info could not be deleted, ' + err.message
          );
        }
      );
  }

  async addLocationModal() {
    const modal = await this.modalController.create({
      component: AddLocationComponent,
      componentProps: {cLocation: this.store.location}
    });

    modal.present();
    modal.onDidDismiss()
    .then(data => {
      this.store.location = data.data[0] + ',' + data.data[1];
      console.log(this.store.location);
    });
  }

  getCurrentLocation() {
    this.locationService.getCurrentLocation()
    .then((data:any) => {
      this.store.location = data[0] + ',' + data[1];
    });
  }

  addAType(type: string) {
    const typeDTO: TypeDTO = {name: type};
    this.types.push(typeDTO);
    console.log(this.types);
  }

  removeAType(type: string) {
    this.types.forEach(typeDTO => {
      if(typeDTO.name === type) {
        this.types.splice(this.types.indexOf(typeDTO),1);
      }
    });
    console.log(this.types);
  }

  checkBoxChange(event: any, value: string) {
    if (event.detail.checked) {
      this.addAType(value)
    } else {
      this.removeAType(value);
    }
  }

}
