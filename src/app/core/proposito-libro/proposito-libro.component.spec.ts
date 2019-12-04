import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropositoLibroComponent } from './proposito-libro.component';

describe('PropositoLibroComponent', () => {
  let component: PropositoLibroComponent;
  let fixture: ComponentFixture<PropositoLibroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropositoLibroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropositoLibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
