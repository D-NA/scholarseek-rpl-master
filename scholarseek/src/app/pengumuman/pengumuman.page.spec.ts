import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PengumumanPage } from './pengumuman.page';

describe('PengumumanPage', () => {
  let component: PengumumanPage;
  let fixture: ComponentFixture<PengumumanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PengumumanPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PengumumanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
