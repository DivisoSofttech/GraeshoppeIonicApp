import { CommandResourceService } from 'src/app/api/services';
import { CategoryDTO } from './../../api/models/category-dto';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { ImageCompressService, IImage } from 'ng2-image-compress';
import { RESIZE_OPTIONS } from 'src/app/image-resize-options';

@Component({
  selector: 'app-add-categories',
  templateUrl: './add-categories.page.html',
  styleUrls: ['./add-categories.page.scss'],
})
export class AddCategoriesPage implements OnInit {

  category: CategoryDTO = {name: ''};

  fileToUpload: File;

  fileUrl = null;
  imageChangedEvent: any = '';
  croppedImage: any = '';
  isCropped = false;
  constructor(
    private modalController: ModalController,
    private commandResourceService: CommandResourceService
  ) { }
  
  
  fileChangeEvent(event: any): void {
      this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
      this.croppedImage = event.base64;
  }
  dismiss(force: boolean) {
    if (force) {
      this.modalController.dismiss();
    } else {
      this.modalController.dismiss({'newCategory' : this.category});
    }
  }
  imageLoaded() {
    // show cropper
  }
  cropperReady() {
    // cropper ready
  }
  loadImageFailed() {
    // show message
  }
  cropFinsh(event: ImageCroppedEvent) {
    this.isCropped = true;
    // console.log('crop finish iscropped ', this.isCropped, this.product.image != null );
    // console.log('image isss>>>> ',this.product.image);
    this.imageChangedEvent = '';
    this.fileUrl = null;
  }
  triggerUpload(ev: Event) {
    document.getElementById('image').click();
  }

  ngOnInit() {
  }

  save() {
    if (this.fileUrl != null) {
    this.category.image = this.fileUrl.substring(this.fileUrl.indexOf(',') + 1);
    this.category.imageContentType = this.fileToUpload.type;
    }
    console.log(this.category);
    this.commandResourceService.createProductCategoryUsingPOST(this.category)
    .subscribe(result => {
      this.category = result;
        this.dismiss(false);
    }, err => {
      console.log('Error creating category');
    });
  }

  onSelectFile(event) {

    this.fileToUpload = event.target.files.item(0);

    const freader = new FileReader();

    freader.onload = (ev: any) => {

      this.fileUrl = ev.target.result;
    };
    const images: Array<IImage> = [];

    // Method which compresses the image and read by the filereader as blob
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
          fetch(images.pop().compressedImage.imageDataUrl).then(data => {
            data.blob().then(blob => {
              console.log('blob', blob);
              freader.readAsDataURL(blob);
            });
          });
        }
      );
    });
    this.fileChangeEvent(event);

    freader.readAsDataURL(this.fileToUpload);
  }
  

}
