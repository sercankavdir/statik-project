import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternetReklamPage } from './internet-reklam.page';

describe('InternetReklamPage', () => {
  let component: InternetReklamPage;
  let fixture: ComponentFixture<InternetReklamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternetReklamPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternetReklamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
