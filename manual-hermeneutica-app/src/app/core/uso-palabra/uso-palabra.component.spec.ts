import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsoPalabraComponent } from './uso-palabra.component';

describe('UsoPalabraComponent', () => {
  let component: UsoPalabraComponent;
  let fixture: ComponentFixture<UsoPalabraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsoPalabraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsoPalabraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
