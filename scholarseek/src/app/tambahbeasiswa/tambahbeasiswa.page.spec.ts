import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TambahbeasiswaPage } from './tambahbeasiswa.page';

describe('TambahbeasiswaPage', () => {
  let component: TambahbeasiswaPage;
  let fixture: ComponentFixture<TambahbeasiswaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TambahbeasiswaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TambahbeasiswaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
