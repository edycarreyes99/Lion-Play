import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayStation4Component } from './play-station4.component';

describe('PlayStation4Component', () => {
  let component: PlayStation4Component;
  let fixture: ComponentFixture<PlayStation4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayStation4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayStation4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
