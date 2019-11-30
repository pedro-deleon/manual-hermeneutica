import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatronesSemanticosComponent } from './patrones-semanticos.component';

describe('PatronesSemanticosComponent', () => {
  let component: PatronesSemanticosComponent;
  let fixture: ComponentFixture<PatronesSemanticosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatronesSemanticosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatronesSemanticosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
