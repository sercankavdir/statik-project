import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasarimPage } from './tasarim.page';

describe('TasarimPage', () => {
  let component: TasarimPage;
  let fixture: ComponentFixture<TasarimPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasarimPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasarimPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
