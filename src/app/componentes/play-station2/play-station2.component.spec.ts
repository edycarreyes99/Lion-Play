import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayStation2Component } from './play-station2.component';

describe('PlayStation2Component', () => {
  let component: PlayStation2Component;
  let fixture: ComponentFixture<PlayStation2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayStation2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayStation2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
