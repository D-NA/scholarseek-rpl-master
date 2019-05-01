import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeskripsiAdminPage } from './deskripsi-admin.page';

describe('DeskripsiAdminPage', () => {
  let component: DeskripsiAdminPage;
  let fixture: ComponentFixture<DeskripsiAdminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeskripsiAdminPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeskripsiAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
