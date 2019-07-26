import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HakkimizdaPage } from './hakkimizda.page';

describe('HakkimizdaPage', () => {
  let component: HakkimizdaPage;
  let fixture: ComponentFixture<HakkimizdaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HakkimizdaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HakkimizdaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
