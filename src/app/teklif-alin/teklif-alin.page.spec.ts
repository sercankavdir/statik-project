import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeklifAlinPage } from './teklif-alin.page';

describe('TeklifAlinPage', () => {
  let component: TeklifAlinPage;
  let fixture: ComponentFixture<TeklifAlinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeklifAlinPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeklifAlinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
