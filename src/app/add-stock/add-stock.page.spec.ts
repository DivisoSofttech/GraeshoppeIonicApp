import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStockPage } from './add-stock.page';

describe('AddStockPage', () => {
  let component: AddStockPage;
  let fixture: ComponentFixture<AddStockPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStockPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStockPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
