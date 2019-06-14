import { RESIZE_OPTIONS } from "../../image-resize-options";
import { Category } from "./../../api/models/category";
import {
  CommandResourceService,
  QueryResourceService
} from "src/app/api/services";
import { Component, OnInit, ElementRef, ViewChild, Input } from "@angular/core";
import { ModalController, LoadingController } from "@ionic/angular";
import {
  ProductDTO,
  StockLine,
  Barcode,
  CategoryDTO,
  UomDTO,
  StockCurrentDTO
} from "src/app/api/models";
import { HttpClient } from "@angular/common/http";
import { ImageCompressService, IImage } from "ng2-image-compress";
import {
  BarcodeScanner,
  BarcodeScanResult
} from "@ionic-native/barcode-scanner/ngx";
import { Crop } from '@ionic-native/crop/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';


@Component({
  selector: "app-add-items",
  templateUrl: "./add-items.page.html",
  styleUrls: ["./add-items.page.scss"]
})
export class AddItemsPage implements OnInit {
  barcode: Barcode;

  stockCurrent: StockCurrentDTO = {};

  product: ProductDTO = {
    name: "",
    searchkey: "",
    reference: "",
    categories: [
      {
        id: 0,
        description: "",
        image: "",
        imageContentType: "",
        name: "",
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

  constructor(
    private modalController: ModalController,
    private commandResourceService: CommandResourceService,
    private queryResourceService: QueryResourceService,
    private http: HttpClient,
    private barcodeScanner: BarcodeScanner,
    private loadingController: LoadingController,
    private crop: Crop,
    private transfer: FileTransfer
  ) {}

  ngOnInit() {
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
      if (this.fileUrl != null) {
        this.product.image = this.fileUrl.substring(
          this.fileUrl.indexOf(",") + 1
        );
        this.product.imageContentType = this.fileToUpload.type;
      }
      console.log(this.product);
  
      this.commandResourceService
        .createProductUsingPOST(this.product)
        .subscribe(result => {
          console.log("saved", result);
          this.stockCurrent.productId = result.id;
          this.stockCurrent.units = 0;
          this.commandResourceService
            .createStockCurrentUsingPOST(this.stockCurrent)
            .subscribe(result => {
              console.log("Stock Current saved ", result);
              this.loading.dismiss();
              this.dismiss(true);
            },
            err => {
              this.loading.dismiss(true);
            });
        });
    })

  }

  onSelectFile(event) {
    this.fileToUpload = event.target.files.item(0);

    const freader = new FileReader();

    freader.onload = (ev: any) => {
      this.fileUrl = ev.target.result;
    };

    //Array to store the converted source images
    let images: Array<IImage> = [];

    //Method which compresses the image and read by the filereader as blob
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
          fetch(images.pop().compressedImage.imageDataUrl).then(data => {
            data.blob().then(blob => {
              console.log("blob", blob);
              freader.readAsDataURL(blob);
            });
          });
        }
      );
    });
  }

  triggerUpload(ev: Event) {
    document.getElementById("image").click();
    this.crop.crop(this.fileUrl,{ quality: 100 })
    .then(
      newImage => {
        console.log('new image path is: ' + this.fileUrl);
        const fileTransfer: FileTransferObject = this.transfer.create();
        const uploadOpts: FileUploadOptions = {
           fileKey: 'file',
           fileName: newImage.substr(newImage.lastIndexOf('/') + 1)
        };
  });
  }
  scanBarcode() {
    this.barcodeScanner
      .scan()
      .then(barcodeData => {
        console.log("Barcode data", barcodeData);
        this.barcode.barcodeTypes[0].barcodeType = barcodeData.format;
        this.barcode.code = barcodeData.text;
      })
      .catch(err => {
        console.log("Error", err);
      });
  }
}
