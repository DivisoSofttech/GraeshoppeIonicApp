import { CommandResourceService } from 'src/app/api/services';
import { CategoryDTO } from './../../api/models/category-dto';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-categories',
  templateUrl: './add-categories.page.html',
  styleUrls: ['./add-categories.page.scss'],
})
export class AddCategoriesPage implements OnInit {

  category: CategoryDTO = {name: ''};

  fileToUpload: File;

  fileUrl = null;

  constructor(
    private modalController: ModalController,
    private commandResourceService: CommandResourceService
  ) { }

  dismiss(){
    this.modalController.dismiss();
  }

  triggerUpload(ev: Event) {
    document.getElementById('image').click();
  }

  ngOnInit() {
  }

  save() {

    this.category.image = this.fileUrl.substring(this.fileUrl.indexOf(',') + 1);
    this.category.imageContentType = this.fileToUpload.type;
    console.log(this.category);
    this.commandResourceService.createProductCategoryUsingPOST(this.category)
    .subscribe(result => {
        this.dismiss();
    });
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
