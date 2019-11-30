import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentificacionCulturaComponent } from './identificacion-cultura.component';

describe('IdentificacionCulturaComponent', () => {
  let component: IdentificacionCulturaComponent;
  let fixture: ComponentFixture<IdentificacionCulturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdentificacionCulturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentificacionCulturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
