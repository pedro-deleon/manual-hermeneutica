import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasajeTemaComponent } from './pasaje-tema.component';

describe('PasajeTemaComponent', () => {
  let component: PasajeTemaComponent;
  let fixture: ComponentFixture<PasajeTemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasajeTemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasajeTemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
