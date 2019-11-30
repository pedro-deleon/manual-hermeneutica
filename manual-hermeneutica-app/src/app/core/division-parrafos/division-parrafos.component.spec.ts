import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisionParrafosComponent } from './division-parrafos.component';

describe('DivisionParrafosComponent', () => {
  let component: DivisionParrafosComponent;
  let fixture: ComponentFixture<DivisionParrafosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivisionParrafosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivisionParrafosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
