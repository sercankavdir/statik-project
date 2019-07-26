import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferanslarimizPage } from './referanslarimiz.page';

describe('ReferanslarimizPage', () => {
  let component: ReferanslarimizPage;
  let fixture: ComponentFixture<ReferanslarimizPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferanslarimizPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferanslarimizPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
