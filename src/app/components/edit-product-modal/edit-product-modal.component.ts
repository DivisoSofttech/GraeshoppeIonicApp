import { CategoryDTO } from './../../api/models/category-dto';
import { ModalController } from '@ionic/angular';
import { CommandResourceService, QueryResourceService } from 'src/app/api/services';
import { Component, OnInit, Input } from '@angular/core';
import { Product, ProductDTO } from 'src/app/api/models';

@Component({
  selector: 'app-edit-product-modal',
  templateUrl: './edit-product-modal.component.html',
  styleUrls: ['./edit-product-modal.component.scss'],
})
export class EditProductModalComponent implements OnInit {

  @Input()
  id;
  productDTO: ProductDTO = {
    maximumStockLevel: null,
    barcodeId: null,
    dateOfExpiry: '',
    dateOfMfd: '',
    description:'',
    id: null,
    image: '',
    imageContentType: '',
    labels:null,
    categories:null,
    mpn: '',
    name: '',
    reOrderLevel: null,
    reference:'',
    searchkey: '',
    sku: '',
    statusId: null,
    taxCategoryId: null,
    visible: true,
  };
  categories: CategoryDTO[];
  fileToUpload: File;
  fileUrl = null;
  constructor(private commandResourceService: CommandResourceService,
    private queryResourceService: QueryResourceService,
    private modalController: ModalController) { }

  ngOnInit() {
    console.log(' finding product  with id '+this.id);
    this.queryResourceService.findAllCategoriesWithOutImageUsingGET({}).subscribe(result => {
      this.categories = result;
    });
 this.queryResourceService.findProductUsingGET(this.id).subscribe(result => {console.log('sucess finding product '+result);
      this.productDTO = result;
  },
  err=>{console.log('error in finding product '+err);});
}

  save() { 
    this.commandResourceService.updateProductUsingPUT(this.productDTO).subscribe(sucess =>{console.log('updating product sucess ' +sucess);
        this.dismiss();},err=>{console.log('error updating product '+err);});
 
  }

  dismiss() {
    this.modalController.dismiss();
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
