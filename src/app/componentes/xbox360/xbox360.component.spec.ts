import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Xbox360Component } from './xbox360.component';

describe('Xbox360Component', () => {
  let component: Xbox360Component;
  let fixture: ComponentFixture<Xbox360Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Xbox360Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Xbox360Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
