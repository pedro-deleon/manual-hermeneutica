import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SustantivosComponent } from './sustantivos.component';

describe('SustantivosComponent', () => {
  let component: SustantivosComponent;
  let fixture: ComponentFixture<SustantivosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SustantivosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SustantivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
