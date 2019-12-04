import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulasExpresionComponent } from './formulas-expresion.component';

describe('FormulasExpresionComponent', () => {
  let component: FormulasExpresionComponent;
  let fixture: ComponentFixture<FormulasExpresionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulasExpresionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulasExpresionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
