import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgrupacionParrafosComponent } from './agrupacion-parrafos.component';

describe('AgrupacionParrafosComponent', () => {
  let component: AgrupacionParrafosComponent;
  let fixture: ComponentFixture<AgrupacionParrafosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgrupacionParrafosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgrupacionParrafosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
