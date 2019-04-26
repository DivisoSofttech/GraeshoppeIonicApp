import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultsProductsPage } from './search-results-products.page';

describe('SearchResultsProductsPage', () => {
  let component: SearchResultsProductsPage;
  let fixture: ComponentFixture<SearchResultsProductsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchResultsProductsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultsProductsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
