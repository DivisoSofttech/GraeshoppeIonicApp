import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentlyUsedPage } from './recently-used.page';

describe('RecentlyUsedPage', () => {
  let component: RecentlyUsedPage;
  let fixture: ComponentFixture<RecentlyUsedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentlyUsedPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentlyUsedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
