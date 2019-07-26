import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NelerYaptikPage } from './neler-yaptik.page';

describe('NelerYaptikPage', () => {
  let component: NelerYaptikPage;
  let fixture: ComponentFixture<NelerYaptikPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NelerYaptikPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NelerYaptikPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
