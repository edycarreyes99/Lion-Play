import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BajosRequisitosComponent } from './bajos-requisitos.component';

describe('BajosRequisitosComponent', () => {
  let component: BajosRequisitosComponent;
  let fixture: ComponentFixture<BajosRequisitosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BajosRequisitosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BajosRequisitosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
