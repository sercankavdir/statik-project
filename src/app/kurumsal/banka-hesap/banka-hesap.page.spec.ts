import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankaHesapPage } from './banka-hesap.page';

describe('BankaHesapPage', () => {
  let component: BankaHesapPage;
  let fixture: ComponentFixture<BankaHesapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankaHesapPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankaHesapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
