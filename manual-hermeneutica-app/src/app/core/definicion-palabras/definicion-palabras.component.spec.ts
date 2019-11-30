import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinicionPalabrasComponent } from './definicion-palabras.component';

describe('DefinicionPalabrasComponent', () => {
  let component: DefinicionPalabrasComponent;
  let fixture: ComponentFixture<DefinicionPalabrasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefinicionPalabrasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefinicionPalabrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
