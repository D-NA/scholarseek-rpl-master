import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeskripsiPage } from './deskripsi.page';

describe('DeskripsiPage', () => {
  let component: DeskripsiPage;
  let fixture: ComponentFixture<DeskripsiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeskripsiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeskripsiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
