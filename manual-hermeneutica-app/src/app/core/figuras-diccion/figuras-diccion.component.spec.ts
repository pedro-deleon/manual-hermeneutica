import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FigurasDiccionComponent } from './figuras-diccion.component';

describe('FigurasDiccionComponent', () => {
  let component: FigurasDiccionComponent;
  let fixture: ComponentFixture<FigurasDiccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FigurasDiccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FigurasDiccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
