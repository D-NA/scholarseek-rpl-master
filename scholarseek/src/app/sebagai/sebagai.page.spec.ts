import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SebagaiPage } from './sebagai.page';

describe('SebagaiPage', () => {
  let component: SebagaiPage;
  let fixture: ComponentFixture<SebagaiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SebagaiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SebagaiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
