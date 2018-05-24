import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayStation3Component } from './play-station3.component';

describe('PlayStation3Component', () => {
  let component: PlayStation3Component;
  let fixture: ComponentFixture<PlayStation3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayStation3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayStation3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
