import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalisisProblemasComponent } from './analisis-problemas.component';

describe('AnalisisProblemasComponent', () => {
  let component: AnalisisProblemasComponent;
  let fixture: ComponentFixture<AnalisisProblemasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalisisProblemasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalisisProblemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
