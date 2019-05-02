import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockManagementPage } from './stock-management.page';

describe('StockManagementPage', () => {
  let component: StockManagementPage;
  let fixture: ComponentFixture<StockManagementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockManagementPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockManagementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
