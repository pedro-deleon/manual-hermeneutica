import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatronesRetoricaComponent } from './patrones-retorica.component';

describe('PatronesRetoricaComponent', () => {
  let component: PatronesRetoricaComponent;
  let fixture: ComponentFixture<PatronesRetoricaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatronesRetoricaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatronesRetoricaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
