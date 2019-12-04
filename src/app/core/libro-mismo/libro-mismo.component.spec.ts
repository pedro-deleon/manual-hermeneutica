import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroMismoComponent } from './libro-mismo.component';

describe('LibroMismoComponent', () => {
  let component: LibroMismoComponent;
  let fixture: ComponentFixture<LibroMismoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibroMismoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibroMismoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
