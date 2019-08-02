import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BizeUlasinPage } from './bize-ulasin.page';

describe('BizeUlasinPage', () => {
  let component: BizeUlasinPage;
  let fixture: ComponentFixture<BizeUlasinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BizeUlasinPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BizeUlasinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
