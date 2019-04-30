import { QueryResourceService } from 'src/app/api/services';
import { CategoryDTO } from './../../api/models/category-dto';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/api/models';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.page.html',
  styleUrls: ['./categories-list.page.scss'],
})
export class CategoriesListPage implements OnInit {
  categoriesList: CategoryDTO[] = [];

  constructor(
    private queryResourceService: QueryResourceService
  ) { }

  ngOnInit() {
    this.queryResourceService.findAllCategoriesUsingGET({})
    .subscribe(result => {
      this.categoriesList = result;
    });
  }

}
