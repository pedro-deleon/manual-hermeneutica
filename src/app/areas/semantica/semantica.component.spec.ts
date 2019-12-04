import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SemanticaComponent } from './semantica.component';

describe('SemanticaComponent', () => {
  let component: SemanticaComponent;
  let fixture: ComponentFixture<SemanticaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemanticaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemanticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
