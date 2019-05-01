import { EditCategoryComponent } from './../../components/edit-category/edit-category.component';
import { CategoryDTO } from './../../api/models/category-dto';
import { QueryResourceService, CommandResourceService } from 'src/app/api/services';
import { ModalController, ActionSheetController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import {AddCategoriesPage} from '../add-categories/add-categories.page'

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

  categories: CategoryDTO[] = [];

  constructor(public actionSheetController: ActionSheetController,
    private modalController: ModalController,
    private queryResourceService: QueryResourceService, public commandResource: CommandResourceService
  ) { }

  ngOnInit() {
    this.queryResourceService.findAllCategoriesUsingGET({})
    .subscribe(result => {
      this.categories = result;
      console.log('---------', this.categories);
    });
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: AddCategoriesPage,
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    this.categories.push(data.newCategory);
  }
  async presentActionSheet(selectedCategory : CategoryDTO) {
    console.log('>>>>>>>>>>>>>>>>>>action sheet with id' + selectedCategory.id);
    const actionSheet = await this.actionSheetController.create({
      header: 'Options',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
          this.commandResource.deleteCategoryUsingDELETE(selectedCategory.id).subscribe(res => {console.log('delete success ' + res)}, err => {console.log('delete faild error ' + err)});
         this.categories.splice(this.categories.indexOf(selectedCategory),1);
        }
      }, {
        text: 'Edit',
        icon: 'create',
        handler: () => {
          console.log('edit clicked');
      this.presentEditModal(selectedCategory);

        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }}]
    });
    await actionSheet.present();
  }
  async presentEditModal(selectedCategory : CategoryDTO) {
    console.log('category seleted for editing '+ selectedCategory);
    const modal = await this.modalController.create({
      component: EditCategoryComponent,
      componentProps: {category: selectedCategory}
    });
    await modal.present();
  }
}
