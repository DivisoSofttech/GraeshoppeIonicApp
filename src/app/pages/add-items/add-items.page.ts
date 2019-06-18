import { RESIZE_OPTIONS } from '../../image-resize-options';
import { Category } from './../../api/models/category';
import {
  CommandResourceService,
  QueryResourceService
} from 'src/app/api/services';
import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
import {
  ProductDTO,
  StockLine,
  Barcode,
  CategoryDTO,
  UomDTO,
  StockCurrentDTO
} from 'src/app/api/models';
import { HttpClient } from '@angular/common/http';
import { ImageCompressService, IImage } from 'ng2-image-compress';
import {
  BarcodeScanner,
  BarcodeScanResult
} from '@ionic-native/barcode-scanner/ngx';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.page.html',
  styleUrls: ['./add-items.page.scss']
})
export class AddItemsPage implements OnInit {

  constructor(
    private modalController: ModalController,
    private commandResourceService: CommandResourceService,
    private queryResourceService: QueryResourceService,
    private http: HttpClient,
    private barcodeScanner: BarcodeScanner,
    private loadingController: LoadingController,
  ) {}
  barcode: Barcode;
  isCropped = false;
  stockCurrent: StockCurrentDTO = {};
  product: ProductDTO = {
    name: '',
    searchkey: '',
    reference: '',
    categories: [
      {
        id: 0,
        description: '',
        image: '',
        imageContentType: '',
        name: '',
        visible: true
      }
    ]
  };

  fileToUpload: File;

  fileUrl = null;

  productUOM: UomDTO;

  categories: CategoryDTO[] = [];

  uoms: UomDTO[] = [];

  loading: HTMLIonLoadingElement;
  imageChangedEvent: any = '';

  ngOnInit() {
    console.log('>>>>>>>>>>>', this.product.image != null);
    this.queryResourceService
      .findAllCategoriesWithOutImageUsingGET({})
      .subscribe(result => {
        this.categories = result;
      });
    this.queryResourceService.findAllUomUsingGET({}).subscribe(result => {
      this.uoms = result;
    });
  }

  async createLoader() {

    this.loading = await this.loadingController.create({
      spinner: 'circles',
      translucent: true,
      cssClass: 'loading'
    });
  }

  dismiss(val) {
    this.modalController.dismiss(val);
  }

  save(): void {

    this.createLoader()
    .then(() => {
      this.loading.present();
      if (this.product.image != '') {
        this.product.imageContentType = 'png';
        this.product.imageContentType=(this.product.image.split(","))[0].split(";")[0].split(":")[1];
        this.product.image = (this.product.image.split(","))[1];
        console.log('image isss1>>>> ',this.product.image);
      }
      console.log(this.product);
      this.commandResourceService
        .createProductUsingPOST(this.product)
        .subscribe(result => {
          console.log('saved', result);
          this.stockCurrent.productId = result.id;
          this.stockCurrent.units = 0;
          this.commandResourceService
            .createStockCurrentUsingPOST(this.stockCurrent)
            .subscribe(result => {
              console.log('Stock Current saved ', result);
              this.loading.dismiss();
              this.dismiss(true);
            },
            err => {
              this.loading.dismiss(true);
            });
        });
    });

  }

  onSelectFile(event) {
    this.fileToUpload = event.target.files.item(0);

    const freader = new FileReader();

    freader.onload = (ev: any) => {
      this.fileUrl = ev.target.result;
    };
    // Array to store the converted source images
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
  }

  triggerUpload(ev: Event) {
    document.getElementById('image').click();

}
  scanBarcode() {
    this.barcodeScanner
      .scan()
      .then(barcodeData => {
        console.log('Barcode data', barcodeData);
        this.barcode.barcodeTypes[0].barcodeType = barcodeData.format;
        this.barcode.code = barcodeData.text;
      })
      .catch(err => {
        console.log('Error', err);
      });
  }

  fileChangeEvent(event: any): void {
      this.imageChangedEvent = event;

      console.log('file change event ', event);
      console.log('is croppeed ', this.isCropped);
  }
  imageCropped(event: ImageCroppedEvent) {
      this.product.image = event.base64;
      console.log('imagecrop iscropped ', this.isCropped);
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
    console.log('crop finish iscropped ', this.isCropped, this.product.image != null );
    console.log('image isss>>>> ',this.product.image);
    this.imageChangedEvent = '';
    this.fileUrl = null;
  }
}
