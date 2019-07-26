import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SosyalMedyaPage } from './sosyal-medya.page';

describe('SosyalMedyaPage', () => {
  let component: SosyalMedyaPage;
  let fixture: ComponentFixture<SosyalMedyaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SosyalMedyaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SosyalMedyaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
