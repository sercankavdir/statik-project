import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EkibimizPage } from './ekibimiz.page';

describe('EkibimizPage', () => {
  let component: EkibimizPage;
  let fixture: ComponentFixture<EkibimizPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EkibimizPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EkibimizPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
