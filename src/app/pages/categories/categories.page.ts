import { EditCategoryComponent } from './../../components/edit-category/edit-category.component';
import { CategoryDTO } from './../../api/models/category-dto';
import { QueryResourceService, CommandResourceService } from 'src/app/api/services';
import { ModalController, ActionSheetController, LoadingController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import {AddCategoriesPage} from '../add-categories/add-categories.page';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

  loading: HTMLIonLoadingElement;

  categories: CategoryDTO[] = [];
  accending = true;
  sort() {
    this.accending = !this.accending;
  }
  constructor(public actionSheetController: ActionSheetController,
    private modalController: ModalController,
    private queryResourceService: QueryResourceService, public commandResource: CommandResourceService,
    private loadingController: LoadingController,
    private userservice : UserService
  ) { }

  async createLoader() {

    this.loading = await this.loadingController.create({
      spinner: 'circles',
      translucent: true,
      cssClass: 'loading'
    });
  }
  userData: any;
  ngOnInit() {
    this.userservice.getCurrentUser(false).then(user=>{this.userData=user});
    this.createLoader()
    .then(() => {
      this.loading.present();
      this.queryResourceService.findAllCategoriesUsingGET(this.userData)
      .subscribe(result => {
        this.categories = result;
        console.log('---------', this.categories);
        this.loading.dismiss();
      },
      err => {
        this.loading.dismiss();
      });  
    })
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: AddCategoriesPage,
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    this.categories.push(data.newCategory);
  }
  async presentActionSheet(selectedCategory: CategoryDTO) {
    console.log('>>>>>>>>>>>>>>>>>>action sheet with id' + selectedCategory.id);
    const actionSheet = await this.actionSheetController.create({
      header: 'Options',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
          this.commandResource.deleteCategoryUsingDELETE(selectedCategory.id).subscribe(res => {console.log('delete success ' + res);
          this.categories.splice(this.categories.indexOf(selectedCategory), 1);
        }, err => {console.log('delete faild error ' + err);});

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
  async presentEditModal(selectedCategory: CategoryDTO) {
    console.log('category seleted for editing ' + selectedCategory);
    const modal = await this.modalController.create({
      component: EditCategoryComponent,
      componentProps: {category: selectedCategory}
    });
    await modal.present();
  }
}
