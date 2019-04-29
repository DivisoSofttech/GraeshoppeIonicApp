import { Category } from './../../api/models/category';
import {
  CommandResourceService,
  QueryResourceService
} from "src/app/api/services";
import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { ProductDTO, StockLine, Barcode, CategoryDTO, UomDTO } from "src/app/api/models";

@Component({
  selector: "app-add-items",
  templateUrl: "./add-items.page.html",
  styleUrls: ["./add-items.page.scss"]
})
export class AddItemsPage implements OnInit {

  barcode: Barcode;

  stockLine: StockLine;

  product: ProductDTO = { name: '', searchkey: '', reference: '' , categories:[]};

  fileToUpload: File;

  fileUrl = null;

  productUOM: UomDTO;
  productCategory: CategoryDTO;

  categories: CategoryDTO[] = [];

  uom: UomDTO[] = [];

  constructor(
    private modalController: ModalController,
    private commandResourceService: CommandResourceService,
    private queryResourceService: QueryResourceService
  ) {}

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
    // if (this.productCategory != null) {
    //   this.product.categories.push(this.productCategory);
    // }
    console.log(this.product);
    // const stockLine: StockLine = {
    //   product: this.product,
    //   uom: this.productUOM
    // };
    this.commandResourceService.createProductUsingPOST(this.product).subscribe(result => {
      console.log('saved');
    });
    this.dismiss();
  }

  onSelectFile(event) {
    this.fileToUpload = event.target.files.item(0);

    const freader = new FileReader();

    freader.onload = (ev: any) => {
      this.fileUrl = ev.target.result;
    };

    freader.readAsDataURL(this.fileToUpload);
  }

  triggerUpload(ev: Event) {
    document.getElementById('image').click();
  }
}
