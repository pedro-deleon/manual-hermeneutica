import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SemanticaOracionesComponent } from './semantica-oraciones.component';

describe('SemanticaOracionesComponent', () => {
  let component: SemanticaOracionesComponent;
  let fixture: ComponentFixture<SemanticaOracionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemanticaOracionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemanticaOracionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
