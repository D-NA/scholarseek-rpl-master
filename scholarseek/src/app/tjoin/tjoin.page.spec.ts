import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TjoinPage } from './tjoin.page';

describe('TjoinPage', () => {
  let component: TjoinPage;
  let fixture: ComponentFixture<TjoinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TjoinPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TjoinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
