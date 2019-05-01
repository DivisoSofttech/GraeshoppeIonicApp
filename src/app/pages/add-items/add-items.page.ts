import { ImageResizeService, RESIZE_OPTIONS } from './../../image-resize.service';
import { Category } from './../../api/models/category';
import {
  CommandResourceService,
  QueryResourceService
} from "src/app/api/services";
import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { ProductDTO, StockLine, Barcode, CategoryDTO, UomDTO } from "src/app/api/models";
import { HttpClient } from '@angular/common/http';
import { ImageCompressService, IImage } from 'ng2-image-compress';
import { BarcodeScanner,BarcodeScanResult } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: "app-add-items",
  templateUrl: "./add-items.page.html",
  styleUrls: ["./add-items.page.scss"]
})
export class AddItemsPage implements OnInit {

  barcode: Barcode;

  stockLine: StockLine;

  product: ProductDTO = { name: '', searchkey: '', reference: '', categories: [] };

  fileToUpload: File;

  fileUrl = null;

  productUOM: UomDTO;
  productCategory: CategoryDTO = {
    id: 0,
    description: '',
    image: '',
    imageContentType: '',
    name: '',
    visible: true
  };

  categories: CategoryDTO[] = [];

  uom: UomDTO[] = [];

  constructor(
    private modalController: ModalController,
    private commandResourceService: CommandResourceService,
    private queryResourceService: QueryResourceService,
    private imageResizer: ImageResizeService,
    private http: HttpClient,
    private barcodeScanner: BarcodeScanner
  ) { }

  ngOnInit() {

    this.queryResourceService.findAllCategoriesUsingGET({})
      .subscribe(result => {
        this.categories = result;
      });
  }

  dismiss() {
    this.modalController.dismiss();
  }

  save(): void {

    this.product.image = this.fileUrl.substring(this.fileUrl.indexOf(',') + 1);
    this.product.imageContentType = this.fileToUpload.type;
    if (this.productCategory != null) {
      console.log('category', this.productCategory);
      this.product.categories.push(this.productCategory);
    }
    console.log(this.product);
    // const stockLine: StockLine = {
    //   product: this.product,
    //   uom: this.productUOM
    // };
    this.commandResourceService.createProductUsingPOST(this.product).subscribe(result => {
      console.log('saved', result);
    });
    this.dismiss();
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
    ImageCompressService.filesArrayToCompressedImageSourceEx([this.fileToUpload], RESIZE_OPTIONS)
      .then(observableImages => {
        observableImages.subscribe((image) => {
          images.push(image);
        }, (error) => {
          console.log("Error while converting");
        }, () => {
          //converts the encoded compressed file to blob for file reader to read
          fetch(images.pop().compressedImage.imageDataUrl)
            .then(data => {
              data.blob()
                .then(blob => {
                  console.log("blob", blob);
                  freader.readAsDataURL(blob);
                })
            });
        });
      });
  }

  triggerUpload(ev: Event) {
    document.getElementById('image').click();
  }

  scanBarcode() {
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.barcode.barcodeTypes[0].barcodeType=barcodeData.format;
      this.barcode.code=barcodeData.text;
     }).catch(err => {
         console.log('Error', err);
     });
  }
}
