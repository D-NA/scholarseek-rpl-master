import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TambahpengumumanPage } from './tambahpengumuman.page';

describe('TambahpengumumanPage', () => {
  let component: TambahpengumumanPage;
  let fixture: ComponentFixture<TambahpengumumanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TambahpengumumanPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TambahpengumumanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
