import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KimlerleCalistikPage } from './kimlerle-calistik.page';

describe('KimlerleCalistikPage', () => {
  let component: KimlerleCalistikPage;
  let fixture: ComponentFixture<KimlerleCalistikPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KimlerleCalistikPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KimlerleCalistikPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
