import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilUygulamaPage } from './mobil-uygulama.page';

describe('MobilUygulamaPage', () => {
  let component: MobilUygulamaPage;
  let fixture: ComponentFixture<MobilUygulamaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobilUygulamaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilUygulamaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
