import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AplicacionHomileticaComponent } from './aplicacion-homiletica.component';

describe('AplicacionHomileticaComponent', () => {
  let component: AplicacionHomileticaComponent;
  let fixture: ComponentFixture<AplicacionHomileticaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AplicacionHomileticaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AplicacionHomileticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
