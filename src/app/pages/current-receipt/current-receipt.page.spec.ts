import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentReceiptPage } from './current-receipt.page';

describe('CurrentReceiptPage', () => {
  let component: CurrentReceiptPage;
  let fixture: ComponentFixture<CurrentReceiptPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentReceiptPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentReceiptPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
