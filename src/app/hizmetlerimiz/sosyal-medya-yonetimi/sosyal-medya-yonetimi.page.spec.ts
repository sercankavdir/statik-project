import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SosyalMedyaYonetimiPage } from './sosyal-medya-yonetimi.page';

describe('SosyalMedyaYonetimiPage', () => {
  let component: SosyalMedyaYonetimiPage;
  let fixture: ComponentFixture<SosyalMedyaYonetimiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SosyalMedyaYonetimiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SosyalMedyaYonetimiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
