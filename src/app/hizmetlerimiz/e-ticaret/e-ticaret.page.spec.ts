import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ETicaretPage } from './e-ticaret.page';

describe('ETicaretPage', () => {
  let component: ETicaretPage;
  let fixture: ComponentFixture<ETicaretPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ETicaretPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ETicaretPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
