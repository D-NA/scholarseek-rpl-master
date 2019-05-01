import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpeningPage } from './opening.page';

describe('OpeningPage', () => {
  let component: OpeningPage;
  let fixture: ComponentFixture<OpeningPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpeningPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpeningPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
