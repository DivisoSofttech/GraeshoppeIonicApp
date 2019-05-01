import { ModalController } from '@ionic/angular';
import { QueryResourceService, CommandResourceService } from 'src/app/api/services';
import { UomDTO } from 'src/app/api/models';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-edit-uommodal',
  templateUrl: './edit-uommodal.component.html',
  styleUrls: ['./edit-uommodal.component.scss'],
})
export class EditUOMModalComponent implements OnInit {
  @Input()
  uom: UomDTO;
  constructor(private commandResourceService: CommandResourceService, private modalController: ModalController) { }

  ngOnInit() {}

  save() {

  }

  dismiss() {
    this.modalController.dismiss();
  }
}
