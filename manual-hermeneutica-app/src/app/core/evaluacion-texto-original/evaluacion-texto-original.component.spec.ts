import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluacionTextoOriginalComponent } from './evaluacion-texto-original.component';

describe('EvaluacionTextoOriginalComponent', () => {
  let component: EvaluacionTextoOriginalComponent;
  let fixture: ComponentFixture<EvaluacionTextoOriginalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluacionTextoOriginalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluacionTextoOriginalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
