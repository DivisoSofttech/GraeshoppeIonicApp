import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchProductsPage } from './search-products.page';

describe('SearchProductsPage', () => {
  let component: SearchProductsPage;
  let fixture: ComponentFixture<SearchProductsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchProductsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchProductsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
