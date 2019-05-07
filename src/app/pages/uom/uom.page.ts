import { EditUomComponent } from './../../components/edit-uom/edit-uom.component';
import { QueryResourceService, CommandResourceService } from 'src/app/api/services';
import { ModalController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';
import {AddUomPage} from '../add-uom/add-uom.page';
import { UomDTO } from 'src/app/api/models';

@Component({
  selector: 'app-uom',
  templateUrl: './uom.page.html',
  styleUrls: ['./uom.page.scss'],
})
export class UomPage implements OnInit {
  @Input()
  uoms: UomDTO[];
  accending : boolean=true;
  sort()
  {
    this.accending=!this.accending;
  }  
  constructor(
    private modalController: ModalController,
    private queryResourceService: QueryResourceService,
    private commandResourceService: CommandResourceService

  ) { }


  async presentModal() {
    const modal = await this.modalController.create({
      component: AddUomPage,
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    this.uoms.push(data.uom);
  }

  ngOnInit() {
    this.queryResourceService.findAllUomUsingGET({}).subscribe(result => {
      this.uoms = result;
    });
  }

  delete(selectedUom : UomDTO) {
    console.log('invoking method to delete an uom with id '+selectedUom.id);
     this.commandResourceService.deleteUOMUsingDELETE(selectedUom.id).subscribe(sucess =>{
       console.log('sucess deleting uom with res ',sucess);
       this.uoms.splice(this.uoms.indexOf(selectedUom),1);
      },
     err => {
       console.log('erroe deleting uom with res ',err)
      });
  }

  edit(uom: UomDTO) {
    this.presentEditModal(uom);
  }
  async presentEditModal(uom: UomDTO)
  {
    const modal = await this.modalController.create({component:EditUomComponent,
    componentProps: {uom: uom}});
    await modal.present();
  }

}
