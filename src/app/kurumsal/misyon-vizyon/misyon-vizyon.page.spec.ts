import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisyonVizyonPage } from './misyon-vizyon.page';

describe('MisyonVizyonPage', () => {
  let component: MisyonVizyonPage;
  let fixture: ComponentFixture<MisyonVizyonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisyonVizyonPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisyonVizyonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
