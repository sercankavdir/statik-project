import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusteriGirisiPage } from './musteri-girisi.page';

describe('MusteriGirisiPage', () => {
  let component: MusteriGirisiPage;
  let fixture: ComponentFixture<MusteriGirisiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusteriGirisiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusteriGirisiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
