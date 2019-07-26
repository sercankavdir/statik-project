import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HizmetlerimizPage } from './hizmetlerimiz.page';

describe('HizmetlerimizPage', () => {
  let component: HizmetlerimizPage;
  let fixture: ComponentFixture<HizmetlerimizPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HizmetlerimizPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HizmetlerimizPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
