import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsankaynaklariPage } from './insankaynaklari.page';

describe('InsankaynaklariPage', () => {
  let component: InsankaynaklariPage;
  let fixture: ComponentFixture<InsankaynaklariPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsankaynaklariPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsankaynaklariPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
