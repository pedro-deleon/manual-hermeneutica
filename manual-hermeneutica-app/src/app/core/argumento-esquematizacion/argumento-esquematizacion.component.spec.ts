import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArgumentoEsquematizacionComponent } from './argumento-esquematizacion.component';

describe('ArgumentoEsquematizacionComponent', () => {
  let component: ArgumentoEsquematizacionComponent;
  let fixture: ComponentFixture<ArgumentoEsquematizacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArgumentoEsquematizacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArgumentoEsquematizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
