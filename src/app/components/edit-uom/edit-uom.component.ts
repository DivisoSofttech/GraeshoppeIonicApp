import { CommandResourceService } from 'src/app/api/services';
import { ModalController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';
import { Uom } from 'src/app/api/models/uom';

@Component({
  selector: 'app-edit-uom',
  templateUrl: './edit-uom.component.html',
  styleUrls: ['./edit-uom.component.scss'],
})
export class EditUomComponent implements OnInit {
  @Input()
  uom : Uom;
  constructor(private modalController: ModalController,
    private commandResourceService:CommandResourceService) { }

  ngOnInit() {}
  update(uom : Uom)
  {
    console.log('update clicked');
    this.commandResourceService.updateUOMUsingPUT(uom).subscribe(succ=>{console.log('success updating uom with res ',succ);
    this.dismiss();
  },
  err=>{console.log('error updating uom with res ',err)});

  }
  dismiss()
  {
    this.modalController.dismiss();
  }

}
