import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BerandaAdminPage } from './beranda-admin.page';

describe('BerandaAdminPage', () => {
  let component: BerandaAdminPage;
  let fixture: ComponentFixture<BerandaAdminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BerandaAdminPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BerandaAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
