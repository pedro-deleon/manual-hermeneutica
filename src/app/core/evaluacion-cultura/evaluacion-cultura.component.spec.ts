import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluacionCulturaComponent } from './evaluacion-cultura.component';

describe('EvaluacionCulturaComponent', () => {
  let component: EvaluacionCulturaComponent;
  let fixture: ComponentFixture<EvaluacionCulturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluacionCulturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluacionCulturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
