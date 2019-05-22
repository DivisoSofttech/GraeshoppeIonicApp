import { DateService } from './../../date/date.service';
import { RESIZE_OPTIONS } from './../../image-resize-options';
import { ImageCompressService } from 'ng2-image-compress';
import { NavController } from '@ionic/angular';
import { Store } from './../../api/models/store';
import { OAuthService } from 'angular-oauth2-oidc';
import { QueryResourceService, CommandResourceService } from 'src/app/api/services';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-store',
  templateUrl: './update-store.page.html',
  styleUrls: ['./update-store.page.scss'],
})
export class UpdateStorePage implements OnInit {

  private store:Store={};
  private storeName:string;
  private storeRegNo:string;
  private storeEmail:string;

  private fileToUpload: File;
  private imageToDisplay:string;
  constructor(private queryService: QueryResourceService, private oauthService: OAuthService, private commandservice: CommandResourceService, private navcntrl:NavController,private dateService:DateService) { }

  ngOnInit() {

    /*     this.queryService.findStoreByRegNoUsingGET({regNo:}) */
    let username;
    if (this.oauthService.hasValidAccessToken()) {

      this.oauthService.loadUserProfile()
      .then((data:any)=>{
        this.storeName=data.preferred_username;
        this.storeEmail=data.email;
        username= data.preferred_username;
        this.storeRegNo=username;
        console.log("store-user",data);
        this.queryService.findStoreByRegNoUsingGET({ regNo: username }).subscribe(
          data => {
            console.log(data.content);
            if((data.content.length>0)){
              this.store = data.content[0];
            } 
          }
        );
      })
/*       this.queryService.findStoreByRegNoUsingGET({ regNo: username }).subscribe(
        data => {
          console.log(data.content);
          if((data.content.length>0)){
            this.store = data.content[0];
          }
            
        }
      ); */

    }
  }

  save() {

    this.store.openingTime=this.dateService.convertToInstantFromHourTime(this.store.openingTime);
    this.store.closingTime=this.dateService.convertToInstantFromHourTime(this.store.closingTime);
    console.log("converted Time",this.store.openingTime,this.store.closingTime);
    this.store.regNo=this.storeRegNo;
    this.store.email=this.storeEmail;
    this.store.name=this.storeName;
    this.commandservice.createStoreUsingPOST(this.store)
      .subscribe(data => { 
        console.log("store updated", this.store);
        this.navcntrl.navigateBack("/settings");

       })
  }
  onSelectFile(event) {
    this.fileToUpload = event.target.files.item(0);

    const freader = new FileReader();

    freader.onload = (ev: any) => {
      this.store.image = ev.target.result;
      this.store.imageContentType= this.fileToUpload.type;
    };
    let images=[];
    ImageCompressService.filesArrayToCompressedImageSourceEx(
      [this.fileToUpload],
      RESIZE_OPTIONS
    ).then(observableImages => {
      observableImages.subscribe(
        image => {
          images.push(image);
        },
        error => {
          console.log("Error while converting");
        },
        () => {
          //converts the encoded compressed file to blob for file reader to read
/*           fetch(images.pop().compressedImage.imageDataUrl).then(data => {
            data.blob().then(blob => {
              console.log("blob", blob);
              freader.readAsDataURL(blob);
            });
          }); */
          
          this.imageToDisplay=images.pop().compressedImage.imageDataUrl;
          this.store.image=(this.imageToDisplay.split(","))[1];
          console.log("image",this.store.image);
        }
      );
    });
  }

  triggerUpload(ev: Event) {
    document.getElementById("logo").click();
  }
}
