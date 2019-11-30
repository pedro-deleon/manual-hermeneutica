import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SemanticaOfComponent } from './semantica-of.component';

describe('SemanticaOfComponent', () => {
  let component: SemanticaOfComponent;
  let fixture: ComponentFixture<SemanticaOfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemanticaOfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemanticaOfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
