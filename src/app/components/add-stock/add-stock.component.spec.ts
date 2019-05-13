import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStockComponent } from './add-stock.component';

describe('AddStockComponent', () => {
  let component: AddStockComponent;
  let fixture: ComponentFixture<AddStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStockComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
