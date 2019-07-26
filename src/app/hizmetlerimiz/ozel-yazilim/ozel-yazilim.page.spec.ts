import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OzelYazilimPage } from './ozel-yazilim.page';

describe('OzelYazilimPage', () => {
  let component: OzelYazilimPage;
  let fixture: ComponentFixture<OzelYazilimPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OzelYazilimPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OzelYazilimPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
