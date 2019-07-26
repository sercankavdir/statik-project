import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KurumsalWebPage } from './kurumsal-web.page';

describe('KurumsalWebPage', () => {
  let component: KurumsalWebPage;
  let fixture: ComponentFixture<KurumsalWebPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KurumsalWebPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KurumsalWebPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
