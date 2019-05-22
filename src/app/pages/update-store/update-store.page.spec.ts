import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStorePage } from './update-store.page';

describe('UpdateStorePage', () => {
  let component: UpdateStorePage;
  let fixture: ComponentFixture<UpdateStorePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateStorePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateStorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
