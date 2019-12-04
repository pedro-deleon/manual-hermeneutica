import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrecuenciaUsoComponent } from './frecuencia-uso.component';

describe('FrecuenciaUsoComponent', () => {
  let component: FrecuenciaUsoComponent;
  let fixture: ComponentFixture<FrecuenciaUsoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrecuenciaUsoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrecuenciaUsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
