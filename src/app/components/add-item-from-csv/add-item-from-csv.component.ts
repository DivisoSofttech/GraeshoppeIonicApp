import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CommandResourceService } from 'src/app/api/services';

@Component({
  selector: 'app-add-item-from-csv',
  templateUrl: './add-item-from-csv.component.html',
  styleUrls: ['./add-item-from-csv.component.scss'],
})
export class AddItemFromCSVComponent implements OnInit {

  fileToUpload: File;

  fileUrl = null;

  fileName = null;

  constructor(
    private modalController: ModalController,
    private commandResourceService: CommandResourceService
  ) { }

  ngOnInit() {}

  dismiss() {
    this.modalController.dismiss();
  }

  fileSelectBox() {
    document.getElementById('uploadElement').click();
  }

  onSelectFile(event) {

    this.fileToUpload = event.target.files.item(0);
    this.fileName = this.fileToUpload.name;

    const freader = new FileReader();

    freader.onload = (ev: any) => {

      this.fileUrl = ev.target.result;
    };

    freader.readAsDataURL(this.fileToUpload);
  }

  save() {
    // this.commandResourceService.loadProductsUsingPOST()
  }

}
