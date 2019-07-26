import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainHostingPage } from './domain-hosting.page';

describe('DomainHostingPage', () => {
  let component: DomainHostingPage;
  let fixture: ComponentFixture<DomainHostingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomainHostingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomainHostingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
