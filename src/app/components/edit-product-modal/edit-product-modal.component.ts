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
  productDTO: ProductDTO;
  categories: CategoryDTO[];
  fileToUpload: File;
  fileUrl = null;
  constructor(private commandResourceService: CommandResourceService,
    private queryResourceService: QueryResourceService,
    private modalController: ModalController) { }

  ngOnInit() {
    this.queryResourceService.findAllCategoriesWithOutImageUsingGET({}).subscribe(result => {
      this.categories = result;
    });
  }

  save() { }

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
