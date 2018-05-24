import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediosRequisitosComponent } from './medios-requisitos.component';

describe('MediosRequisitosComponent', () => {
  let component: MediosRequisitosComponent;
  let fixture: ComponentFixture<MediosRequisitosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediosRequisitosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediosRequisitosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
