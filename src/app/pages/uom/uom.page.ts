import { QueryResourceService, CommandResourceService } from 'src/app/api/services';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import {AddUomPage} from '../add-uom/add-uom.page';
import { UomDTO } from 'src/app/api/models';

@Component({
  selector: 'app-uom',
  templateUrl: './uom.page.html',
  styleUrls: ['./uom.page.scss'],
})
export class UomPage implements OnInit {

  uoms: UomDTO[];

  constructor(
    private modalController: ModalController,
    private queryResourceService: QueryResourceService,
    private commandResourceService: CommandResourceService

  ) { }


  async presentModal() {
    const modal = await this.modalController.create({
      component: AddUomPage,
    });
    return await modal.present();
  }

  ngOnInit() {
    this.queryResourceService.findAllUomUsingGET({}).subscribe(result => {
      this.uoms = result;
    });
  }

  delete() {

  }

  edit(uom: UomDTO) {

  }

}
