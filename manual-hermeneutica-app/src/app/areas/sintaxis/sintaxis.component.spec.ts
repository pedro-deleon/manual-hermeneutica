import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SintaxisComponent } from './sintaxis.component';

describe('SintaxisComponent', () => {
  let component: SintaxisComponent;
  let fixture: ComponentFixture<SintaxisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SintaxisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SintaxisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
