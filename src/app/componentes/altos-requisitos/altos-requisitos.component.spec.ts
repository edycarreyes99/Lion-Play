import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltosRequisitosComponent } from './altos-requisitos.component';

describe('AltosRequisitosComponent', () => {
  let component: AltosRequisitosComponent;
  let fixture: ComponentFixture<AltosRequisitosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltosRequisitosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltosRequisitosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
