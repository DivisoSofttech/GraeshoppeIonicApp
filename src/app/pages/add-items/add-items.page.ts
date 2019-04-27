import { Category } from './../../api/models/category';
import {
  CommandResourceService,
  QueryResourceService
} from "src/app/api/services";
import { Component, OnInit } from "@angular/core";
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

  product: ProductDTO = { name: '', searchkey: '', reference: '' , categories:[{id:1 , name:''}]};

  fileToUpload: File;

  fileUrl: string;

  categories: Category[] = [];

  uom: UomDTO[] = [];

  constructor(
    private modalController: ModalController,
    private commandResourceService: CommandResourceService,
    private queryResourceService: QueryResourceService
  ) {}

  ngOnInit() {

    this.queryResourceService.findAllCategoriesUsingGET({})
    .subscribe(result => {
        this.categories = result.content;
    });


  }

  dismiss() {
    this.modalController.dismiss();
  }

  save(): void {

    this.product.image = this.fileUrl.substring(this.fileUrl.indexOf(',') + 1);
    this.product.imageContentType = this.fileToUpload.type;
    console.log(this.product);
    this.commandResourceService.createProductUsingPOST(this.product);
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
}
