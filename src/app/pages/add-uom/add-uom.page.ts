import { CommandResourceService } from 'src/app/api/services';
import { UomDTO } from './../../api/models/uom-dto';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-uom',
  templateUrl: './add-uom.page.html',
  styleUrls: ['./add-uom.page.scss'],
})
export class AddUomPage implements OnInit {

  uom: UomDTO = {name: ''};

  constructor(
    private modalController: ModalController,
    private commandResourceService: CommandResourceService
  ) { }

  dismiss() {
    this.modalController.dismiss();
  }

  ngOnInit() {
  }

  save() {
    console.log(this.uom);
    this.commandResourceService.createUOMUsingPOST(this.uom)
    .subscribe(result => {
      
        this.dismiss();
    });
  }
}
