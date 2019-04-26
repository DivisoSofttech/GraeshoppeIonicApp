import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUomPage } from './add-uom.page';

describe('AddUomPage', () => {
  let component: AddUomPage;
  let fixture: ComponentFixture<AddUomPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUomPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
