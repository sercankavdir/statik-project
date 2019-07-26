import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KurumsalKimlikPage } from './kurumsal-kimlik.page';

describe('KurumsalKimlikPage', () => {
  let component: KurumsalKimlikPage;
  let fixture: ComponentFixture<KurumsalKimlikPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KurumsalKimlikPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KurumsalKimlikPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
